import { Webhook } from "standardwebhooks";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Dodo_Webhook_Secret } from "@/lib/env";
import { db } from "@/db/drizzle";
import { user } from "@/db/schema/auth";
import { eq, desc } from "drizzle-orm";
import { billing_info } from "@/db/schema/user";

const webhook = new Webhook(Dodo_Webhook_Secret || "");

export async function POST(request: Request) {
  if (!Dodo_Webhook_Secret) throw new Error("DODO_WEBHOOK_SECRET not found");

  const headersList = headers();
  const rawBody = await request.text();

  const headerData = await headersList;
  const webhookHeaders = {
    "webhook-id": headerData.get("webhook-id") || "",
    "webhook-signature": headerData.get("webhook-signature") || "",
    "webhook-timestamp": headerData.get("webhook-timestamp") || "",
  };

  try {
    await webhook.verify(rawBody, webhookHeaders);
    const payload = JSON.parse(rawBody);
    const { data, type } = payload;

    if (type === "payment.succeeded") {
      const latestBillingInfo = await db
        .select()
        .from(billing_info)
        .where(eq(billing_info.email, data.customer.email))
        .orderBy(desc(billing_info.timestamp))
        .limit(1);

      //ToDo - add ability to add more days if subscription not expriy
      const add30Days = (date: Date): Date => {
        const newDate = new Date(date);
        newDate.setTime(newDate.getTime() + 30 * 24 * 60 * 60 * 1000);
        return newDate;
      };

      await db.insert(billing_info).values({
        email: data.customer.email,
        name: data.metadata.name,
        timestamp: new Date(data.created_at),
        subscription_id: data.subscription_id,
        payment_id: data.payment_id,
        total_amount: data.total_amount,
        settlement_currency: data.settlement_currency,
        city: data.billing.city,
        expire_date: add30Days(new Date(data.created_at)),
        country: data.billing.country,
        state: data.billing.state,
        street: data.billing.street,
        zipcode: data.billing.zipcode,
      });

      await db
        .update(user)
        .set({
          paid_user: true,
        })
        .where(eq(user.id, data.metadata.userId));

      console.log({ latestBillingInfo });
    }
  } catch (error) {
    console.error("failed", error);
    return NextResponse.json({ error }, { status: 400 });
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

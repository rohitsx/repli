import { Webhook } from "standardwebhooks";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { user } from "@/db/schema/auth";
import { eq } from "drizzle-orm";
import { Dodo_Webhook_Secret } from "@/lib/env";

const webhook = new Webhook(Dodo_Webhook_Secret || "");

export async function POST(request: Request) {
  if (!Dodo_Webhook_Secret) throw new Error("DODO_WEBHOOK_SECRET not found");
  console.log({ Dodo_Webhook_Secret });
  const headersList = headers();
  const rawBody = await request.text();

  const data = await headersList;
  const webhookHeaders = {
    "webhook-id": data.get("webhook-id") || "",
    "webhook-signature": data.get("webhook-signature") || "",
    "webhook-timestamp": data.get("webhook-timestamp") || "",
  };

  await webhook.verify(rawBody, webhookHeaders);
  const payload = JSON.parse(rawBody);

  if (payload.type === "payment.succeeded") {
    console.log(payload);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

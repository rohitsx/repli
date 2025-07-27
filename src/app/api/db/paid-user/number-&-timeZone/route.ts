import { db } from "@/db/drizzle";
import { user } from "@/db/schema/auth";
import { paid_user } from "@/db/schema/user";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const POST = async (req: Request): Promise<NextResponse> => {
  const body = await req.json();
  const { phone, timeZone, email, name } = body;

  await db
    .insert(paid_user)
    .values({ email, name, whatsapp_no: phone, time_zone: timeZone })
    .onConflictDoUpdate({
      target: paid_user.email,
      set: {
        whatsapp_no: phone,
        time_zone: timeZone,
        summary_schedule_time: "06:00",
      },
    });

  await db
    .update(user)
    .set({
      is_whatsapp_no: true,
    })
    .where(eq(user.email, email));

  return NextResponse.json("ok", { status: 200 });
};

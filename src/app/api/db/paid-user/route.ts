import { db } from "@/db/drizzle";
import { paid_user } from "@/db/schema/user";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (req: Request): Promise<NextResponse> => {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");

  if (!email) return NextResponse.json("email not found", { status: 400 });

  const data = await db
    .select()
    .from(paid_user)
    .where(eq(paid_user.email, email));
  const { name, gmail_auth_id, whatsapp_no, time_zone, summary_schedule_time } =
    data[0];

  return NextResponse.json(
    { name, gmail_auth_id, whatsapp_no, time_zone, summary_schedule_time },
    { status: 200 },
  );
};

export const POST = async (req: Request): Promise<NextResponse> => {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");

  const { name, whatsAppNo, timeZone, emailSummaryTime } = await req.json();

  if (!email) return NextResponse.json("email not found", { status: 400 });

  await db.update(paid_user).set({
    name: name,
    whatsapp_no: whatsAppNo,
    time_zone: timeZone,
    summary_schedule_time: emailSummaryTime,
  });

  return NextResponse.json("ok", { status: 200 });
};

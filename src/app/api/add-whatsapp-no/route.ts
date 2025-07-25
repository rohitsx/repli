import { db } from "@/db/drizzle";
import { user } from "@/db/schema/auth";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const POST = async (req: Request): Promise<NextResponse> => {
	const body = await req.json();
	const { phone, timeZone, countryCode, email } = body;
	console.log({ phone, timeZone, countryCode, email });

	await db
		.update(user)
		.set({ whatsapp_no: phone, time_zone: timeZone, country_code: countryCode })
		.where(eq(user.email, email));

	return NextResponse.json("ok", { status: 200 });
};

import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db/drizzle";
import { billing_info } from "@/db/schema/user";

export async function GET(req: Request) {
	const url = new URL(req.url);
	const email = url.searchParams.get("email");

	if (!email) return NextResponse.json("bad request", { status: 401 });

	const dbData = await db
		.select()
		.from(billing_info)
		.where(eq(billing_info.email, email));

	return NextResponse.json({ country: dbData[0].country }, { status: 200 });
}

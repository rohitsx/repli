import { NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";
import { db } from "@/db/drizzle";
import { user } from "@/db/schema/auth";
import { eq } from "drizzle-orm";

export async function GET(req: Request) {
	const session = await auth.api.getSession({
		headers: req.headers,
	});

	if (!session) return NextResponse.json("Unauthorized", { status: 401 });

	const data = await db.select().from(user).where(eq(user.id, session.user.id));

	console.log({ data: data[0] });

	return NextResponse.json({ received: true }, { status: 200 });
}

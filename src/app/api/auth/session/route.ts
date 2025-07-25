import { auth } from "@/lib/auth/auth";
import { NextResponse } from "next/server";

export const GET = async (req: Request): Promise<NextResponse> => {
	const session = await auth.api.getSession({
		headers: req.headers,
	});

	console.log(req.headers);

	if (!session) {
		return NextResponse.json("Unauthorized", { status: 401 });
	}

	return NextResponse.json({ user: session.user });
};

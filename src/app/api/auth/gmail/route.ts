import { NextResponse } from "next/server";
import { google } from "googleapis";
import { getAuthUrl } from "./getAuthUrl";
import { Domain, Google_Client_Id, Google_Client_Secret } from "@/lib/env";
import { db } from "@/db/drizzle";
import { user } from "@/db/schema/auth";
import { eq } from "drizzle-orm";

export const GET = async (req: Request): Promise<NextResponse> => {
	const { searchParams } = new URL(req.url);

	if (searchParams.has("id") && searchParams.has("email")) {
		try {
			const id = searchParams.get("id") as string;
			const email = searchParams.get("email") as string;

			if (!id || !email) {
				return NextResponse.json(
					{ error: "Missing email or id" },
					{ status: 400 },
				);
			}

			const authUrl = getAuthUrl({ id, email });
			return NextResponse.json({ authUrl });
		} catch (error) {
			console.error("Error generating auth URL:", error);
			return NextResponse.json(
				{ error: "Failed to generate auth URL" },
				{ status: 500 },
			);
		}
	}

	const code = searchParams.get("code");
	const state = searchParams.get("state");

	if (!code || !state) {
		return NextResponse.redirect(
			`${Domain}/error?message=Missing%20code%20or%20state`,
		);
	}

	try {
		const decoded = JSON.parse(Buffer.from(state, "base64url").toString());
		const { email, id } = decoded;
		console.log({ email, id });

		const oauth2Client = new google.auth.OAuth2(
			Google_Client_Id,
			Google_Client_Secret,
			`${Domain}/api/auth/gmail`,
		);

		const { tokens } = await oauth2Client.getToken(code);
		oauth2Client.setCredentials(tokens);

		const userInfoResponse = await fetch(
			"https://www.googleapis.com/oauth2/v3/userinfo",
			{
				headers: {
					Authorization: `Bearer ${tokens.access_token}`,
				},
			},
		);
		if (!userInfoResponse.ok) {
			throw new Error("Failed to fetch user info");
		}

		const userInfo = await userInfoResponse.json();
		const gamilAuthEmail = userInfo.email;

		await db
			.update(user)
			.set({
				gmail_auth: true,
				gmail_auth_access_token: tokens.access_token,
				gmail_auth_refresh_token: tokens.refresh_token,
				gmail_auth_id: gamilAuthEmail,
			})
			.where(eq(user.email, email));

		const redirectUrl = `${Domain}/bot-setup?auth=true`;
		return NextResponse.redirect(redirectUrl);
	} catch (error) {
		console.error("Error during OAuth callback:", error);
		return NextResponse.redirect(
			`${Domain}/error?message=Authentication%20failed`,
		);
	}
};

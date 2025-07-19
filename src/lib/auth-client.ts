import { createAuthClient } from "better-auth/react";
import { Client_Domain } from "./env";

export const baseAuthClient = createAuthClient({
	baseURL: `${Client_Domain}/api/auth/base`,
});

export const gmailAuthClient = createAuthClient({
	baseURL: `${Client_Domain}/api/auth/gmail`,
});

export const baseSignIn = async () =>
	await baseAuthClient.signIn.social({
		provider: "google",
	});

export const gmailSignIn = async () =>
	await gmailAuthClient.signIn.social({
		provider: "google",
		callbackURL: "/app",
		scopes: [
			"https://www.googleapis.com/auth/gmail.readonly",
			"https://www.googleapis.com/auth/gmail.send",
		],
	});

import { betterAuth } from "better-auth";
import { Domain } from "../env";
import { db } from "@/db/drizzle";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import {
	gmail_users,
	gmail_sessions,
	gmail_accounts,
	gmail_verifications,
} from "@/db/schema/gmail";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: {
			gmail_users,
			gmail_sessions,
			gmail_accounts,
			gmail_verifications,
		},
	}),
	user: {
		modelName: "gmail_users",
		additionalFields: {
			timeZone: {
				type: "string",
				required: true,
			},
			msgTime: {
				type: "string",
				required: true,
			},
		},
	},
	session: {
		modelName: "gmail_sessions",
	},
	account: {
		modelName: "gmail_accounts",
	},
	verification: {
		modelName: "gmail_verifications",
	},
	socialProviders: {
		google: {
			prompt: "select_account",
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			scope: [
				"https://www.googleapis.com/auth/gmail.readonly",
				"https://www.googleapis.com/auth/gmail.send",
			],
		},
	},
	baseURL: `${Domain}/api/auth/gmail`,
});

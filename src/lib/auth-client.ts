import { createAuthClient } from "better-auth/react";
import { Client_Domain } from "./env";
import { inferAdditionalFields } from "better-auth/client/plugins";
import type { auth } from "@/lib/auth/auth";

export const authClient = createAuthClient({
	plugins: [inferAdditionalFields<typeof auth>()],
	baseURL: `${Client_Domain}/api/auth/base`,
});

export const signIn = async () =>
	await authClient.signIn.social({
		provider: "google",
	});

export type Session = typeof authClient.$Infer.Session;

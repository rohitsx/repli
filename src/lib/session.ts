import { authClient } from "./auth-client";

export const updateSession = async () => {
	await authClient.getSession({
		query: {
			disableCookieCache: true,
		},
	});
};

import { authClient } from "./auth-client";

export const updateSession = async () => {
	const route = window.location.pathname;
	if (route !== "/bot-setup" && route !== "/app") return;

	await authClient.getSession({
		query: {
			disableCookieCache: true,
		},
	});
};

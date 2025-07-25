"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export const StatusUi = () => {
	const [path, setPath] = useState<string>("");
	const { data: session } = authClient.useSession();

	const statusClass = "text-xs px-2 py-1 rounded-lg  font-medium";

	useEffect(() => {
		setPath(window.location.pathname);
	}, []);

	if (path !== "/bot-setup")
		return (
			<Link href="/pricing" className={`text-black hover:text-gray-700 `}>
				Pricing
			</Link>
		);

	if (session?.user.paidUser) {
		return (
			<div className={`${statusClass} + bg-green-100 text-green-700`}>Pro</div>
		);
	}

	return (
		<div className={`${statusClass} bg-red-100 text-red-700`}>
			No active plan
		</div>
	);
};

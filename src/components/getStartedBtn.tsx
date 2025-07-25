"use client";

import { ArrowRight } from "lucide-react";
import { TryNow } from "./TryOrIcon";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Dodo_Redirect_URL } from "@/lib/env";
import Link from "next/link";

export const GetStartedBtn = () => {
	const { data: session } = authClient.useSession();

	const [path, setPath] = useState<string>("");

	useEffect(() => {
		setPath(window.location.pathname);
	}, []);

	const btnClass =
		"flex items-center gap-2 cursor-pointer bg-whatsapp hover:bg-whatsapp-h text-white p-3 px-6 md:px-8 md:py-4 rounded-lg transition-colors duration-300";

	const BtnContent = (
		<>
			Get Started
			<ArrowRight size={18} />
		</>
	);

	if (!session) {
		return (
			<TryNow
				TriggerAction={() => (
					<DialogTrigger className={btnClass}>{BtnContent}</DialogTrigger>
				)}
			/>
		);
	}

	if (path === "/pricing") {
		return (
			<Link href={Dodo_Redirect_URL || ""} className={btnClass}>
				Get Started
				<ArrowRight size={18} />
			</Link>
		);
	}

	const getRedirectPath = () => {
		if (!session.user.gmail_auth && !session.user.is_whatsapp_no)
			return "/bot-setup";

		if (session.user.gmail_auth && !session.user.is_whatsapp_no)
			return "/bot-setup?auth=true";

		if (!session.user.gmail_auth && session.user.is_whatsapp_no)
			return "/bot-setup?whatsapp-no=true";

		if (session.user.gmail_auth && session.user.is_whatsapp_no) return "/app";

		return session.user.paid_user ? "/bot-setup" : "/pricing";
	};

	const redirectPath = getRedirectPath();

	return (
		<Link href={redirectPath} className={btnClass}>
			{BtnContent}
		</Link>
	);
};

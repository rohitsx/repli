"use client";

import { ArrowRight } from "lucide-react";
import { TryNow } from "./TryOrIcon";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { baseAuthClient, gmailAuthClient } from "@/lib/auth-client";
import { Dodo_Redirect_URL } from "@/lib/env";

export const GetStartedBtn = () => {
	const { data: session } = baseAuthClient.useSession();

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
			<a href={Dodo_Redirect_URL} className={btnClass}>
				Get Started
				<ArrowRight size={18} />
			</a>
		);
	}

	const redirectPath = (session.user as any).paidUser
		? "/bot-setup"
		: "/pricing";

	return (
		<a href={redirectPath} className={btnClass}>
			{BtnContent}
		</a>
	);
};

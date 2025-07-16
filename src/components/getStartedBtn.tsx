"use client";

import { useSessionStore } from "@/store/useSessionStore";
import { ArrowRight } from "lucide-react";
import { TryNow } from "./TryOrIcon";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

export const GetStartedBtn = () => {
	const session = useSessionStore((state) => state.session);
	const [path, setPath] = useState<string>("");

	useEffect(() => {
		setPath(window.location.pathname);
	}, []);

	const btnClass =
		"flex items-center gap-2 cursor-pointer bg-whatsapp hover:bg-whatsapp-h text-white p-2 px-6 md:px-8 md:py-4 rounded-lg transition-colors duration-300";

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
			<a
				href="https://test.checkout.dodopayments.com/buy/pdt_UAjGz9R1DmhLZ9eYF0uqm?quantity=1&redirect_url=https://definite-locally-tarpon.ngrok-free.app%2Fbot-setup"
				className={btnClass}
			>
				Get Started
			</a>
		);
	}

	const redirectPath = session.user.paidUser ? "/bot-setup" : "/pricing";

	return (
		<a href={redirectPath} className={btnClass}>
			{BtnContent}
		</a>
	);
};

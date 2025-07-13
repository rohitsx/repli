"use client";

import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { RepliLogo } from "./logo";
import {
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
	useUser,
} from "@clerk/nextjs";
import { useEffect, useState } from "react";

export const PriceNavBar = () => {
	const { user } = useUser();

	// Simulate subscription info
	const [subscriptionStatus, setSubscriptionStatus] = useState<
		"active" | "expiring" | "none"
	>("none");
	const [daysLeft, setDaysLeft] = useState<number>(0);

	useEffect(() => {
		// Simulate different states by changing below
		// setSubscriptionStatus("active");
		// setDaysLeft(12);
		// setSubscriptionStatus("expiring");
		// setDaysLeft(3);
		// setSubscriptionStatus("none");
	}, []);

	const getStatusUI = () => {
		if (subscriptionStatus === "active") {
			return (
				<div className="text-xs md:text-sm px-3 py-1 rounded-lg bg-green-100 text-green-700 font-medium">
					Pro – {daysLeft} days left
				</div>
			);
		}
		if (subscriptionStatus === "expiring") {
			return (
				<div className="text-xs md:text-sm px-3 py-1 rounded-lg bg-yellow-100 text-yellow-800 font-medium">
					Expiring in {daysLeft} day{daysLeft !== 1 && "s"}
				</div>
			);
		}
		return (
			<div className="text-xs md:text-sm px-3 py-1 rounded-lg bg-red-100 text-red-700 font-medium">
				No active plan
			</div>
		);
	};

	return (
		<div className="w-full py-8 px-4 flex justify-center">
			<nav className="md:w-2/3 w-full shadow-xl border flex items-center rounded-2xl md:px-6 px-4 py-3 justify-between">
				<Link href="/" className="flex text-xl font-bold space-x-3">
					<RepliLogo size={24} />
					<h1>Repli AI</h1>
				</Link>

				<NavigationMenu>
					<NavigationMenuList className="flex items-center gap-4 md:gap-6 text-sm font-medium">
						{/* Subscription Status */}
						<SignedIn>{getStatusUI()}</SignedIn>

						{/* Auth buttons */}
						<SignedOut>
							<SignInButton>
								<button className="cursor-pointer bg-whatsapp hover:bg-whatsapp-h text-white p-2 px-4 rounded-lg transition-colors duration-300 text-sm">
									Try now
								</button>
							</SignInButton>
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</NavigationMenuList>
				</NavigationMenu>
			</nav>
		</div>
	);
};

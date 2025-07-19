"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { GmailIcon } from "./logo";
import { PhoneInput } from "./ui/phone-input";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { gmailSignIn } from "@/lib/auth-client";

export const GmailAuth = () => {
	const [phone, setPhone] = useState<string>("");

	return (
		<Card className="h-full text-left md:w-1/2 md:h-115">
			<CardHeader>
				<CardTitle className="font-medium text-2xl">
					Get started with Repli AI
				</CardTitle>
				<CardDescription>
					Connect your preferred Gmail and WhatsApp number for Repli AI to send
					messages.
				</CardDescription>
			</CardHeader>

			<CardContent className="h-36 flex flex-col items-center my-6">
				<div className="h-full w-full flex flex-col items-start justify-center space-y-4">
					<Button
						variant="outline"
						type="button"
						className="py-6 w-full space-x-1 cursor-pointer "
						onClick={() => gmailSignIn()}
					>
						<GmailIcon />
						<p className="text-sm md:text-base "> Connect Gmail</p>
					</Button>
					<PhoneInput
						value={phone}
						onChange={setPhone}
						placeholder="Enter Whatsapp number"
						className="w-full placeholder:xs"
					/>

					<Button
						variant="outline"
						type="button"
						className="w-full space-x-2 cursor-pointer bg-whatsapp text-white hover:bg-whatsapp-h hover:text-white"
					>
						<p className="text-sm md:text-base"> Submit</p>
						<ArrowRight />
					</Button>
				</div>
			</CardContent>
			<CardFooter>
				<div className="flex items-center gap-x-1 text-xs text-gray-500 flex-wrap">
					By clicking continue, you agree to our
					<a
						href="/terms-&-conditions"
						target="_blank"
						className="text-black-600 underline"
					>
						Terms of Service
					</a>
					and
					<a
						href="/privacy-&-policy"
						target="_blank"
						className="text-black-600 underline"
					>
						Privacy Policy
					</a>
					.
				</div>
			</CardFooter>
		</Card>
	);
};

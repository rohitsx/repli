"use client";

import { baseAuthClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import { Button } from "../btn";
import { UserAvatar } from "./user-avatar";
import { InputField } from "./input-field";
import { Input } from "../ui/input";
import { GmailIcon } from "../logo";

export const AppContent = () => {
	const { data: session } = baseAuthClient.useSession();
	const [name, setName] = useState("");
	const [whatsAppNo, setWhatsAppNo] = useState("");
	const [emailSummaryTime, setEmailSummaryTime] = useState("");

	useEffect(() => {
		if (session) setName(session.user.name);
	}, [session]);

	return (
		<div className="p-6 rounded-r-2xl sm:rounded-2xl bg-white h-full flex flex-col items-center space-y-9 placeholder:text-xs">
			<div className="pt-8 md:pt-4 space-y-4 w-64">
				<UserAvatar session={session} />
			</div>

			<div className="gap-3 w-full space-y-7">
				<InputField id="name" label="Name">
					<Input
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter your name"
						className="placeholder:text-xs"
					/>
				</InputField>
				<InputField id="whatsapp" label="WhatsApp Number">
					<Input
						id="whatsapp"
						value={whatsAppNo}
						onChange={(e) => setWhatsAppNo(e.target.value)}
						placeholder="Enter WhatsApp Number"
						className="placeholder:text-xs"
					/>
				</InputField>
				<InputField id="summaryTime" label="Email Summary Delivery Time">
					<Input
						id="summaryTime"
						type="time"
						value={emailSummaryTime}
						onChange={(e) => setEmailSummaryTime(e.target.value)}
						className="placeholder:text-xs"
					/>
				</InputField>
				<div className="space-y-4">
					<InputField id="email-account" label="Email Account">
						<Input
							id="email-account"
							className="placeholder:text-xs"
							value="rohitbindw@gmail.com"
							readOnly
						/>
					</InputField>
					<div className="flex gap-3 w-full ">
						<Button className="flex-1 " variant="outline">
							<GmailIcon />
							Change Gmail
						</Button>
						<Button className="flex-1 " variant="outline">
							<GmailIcon />
							Disconnect Gmail
						</Button>
					</div>
				</div>
			</div>

			<div className="w-full flex justify-end">
				<Button
					variant="outline"
					className="w-full bg-whatsapp text-white hover:bg-whatsapp-h hover:text-white"
				>
					Save Changes
				</Button>
			</div>
		</div>
	);
};

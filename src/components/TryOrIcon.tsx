"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LoginForm } from "./loginForm";
import { RepliDarkLogo } from "./logo";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { JSX } from "react";
import { AvatarUi } from "./avatar";

export const TryNowOrIcon = () => {
	const { data: session } = authClient.useSession();

	const TriggerAction = () => (
		<DialogTrigger className="cursor-pointer bg-whatsapp hover:bg-whatsapp-h text-white p-2 px-4 rounded-lg transition-colors duration-300">
			Try now
		</DialogTrigger>
	);

	if (session?.user)
		return (
			<Icon
				img={session.user.image || ""}
				fallback={session.user.name.charAt(0)}
				email={session.user.email}
			/>
		);

	return <TryNow TriggerAction={TriggerAction} />;
};

export const TryNow = ({
	TriggerAction,
}: {
	TriggerAction: () => JSX.Element;
}) => {
	return (
		<Dialog>
			<TriggerAction />
			<DialogContent className="w-xs md:w-md">
				<DialogHeader>
					<div className="flex flex-col items-center justify-center gap-6 p-6 md:p-10">
						<div className="flex w-full max-w-sm flex-col gap-6">
							<DialogTitle className="flex justify-center items-center gap-2">
								<div className="flex flex-col items-center gap-2">
									<RepliDarkLogo size={25} />
									<span className="sr-only">Repli AI </span>
									<h1 className="text-xl font-bold">Welcome to Repli AI</h1>
								</div>
							</DialogTitle>
							<LoginForm />
						</div>
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

const Icon = ({
	img,
	fallback,
	email,
}: {
	img: string;
	fallback: string;
	email: string;
}) => {
	const router = useRouter();

	const handleLogout = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.push("/");
				},
			},
		});
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<AvatarUi img={img} fallback={fallback} />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>{email}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => handleLogout()}>
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

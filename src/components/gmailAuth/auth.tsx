import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { GmailAuthCardContent } from "./cardContent";

export const GmailAuth = async () => {
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
					<GmailAuthCardContent />
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

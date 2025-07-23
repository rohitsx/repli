import { PaymentCheckout } from "@/components/paymentCheckout";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
	return (
		<div className="flex flex-col items-center w-full py-4">
			<div className="flax items-start w-sm md:w-md px-4 pt-8 md:pt-18">
				<Link href="/" className="flex items-center gap-2 cursor-pointer ">
					<ArrowLeft size={20} />
					Back
				</Link>
			</div>
			<div className="w-full max-w-sm flex flex-col mb-18 items-center">
				<PaymentCheckout />
				<div className="text-xs text-center px-12 md:px-4">
					<p>
						I'm just one person, but always here to listen. Feel free to DM me
						on{" "}
						<Link
							href="https://x.com/rohitsxx"
							target="_blank"
							className="hover:underline"
						>
							x.com/rohitsxx
						</Link>{" "}
						or email{" "}
						<Link
							href="mailto:rohitbhindw@gmail.com "
							className="hover:underline"
						>
							rohitbhindw@gmail.com
						</Link>
						. I promise I'm willing to spend all my time, even if I have just
						one user.
					</p>
					<br />
					<p>
						When you visit the payment portal paste the same email you used to
						sign in to Repli AI
					</p>
				</div>
			</div>
		</div>
	);
}

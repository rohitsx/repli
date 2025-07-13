import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { RepliLogo, XLogo } from "./logo";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const NavBar = () => {
	return (
		<div className="w-full py-8 px-4 flex  justify-center">
			<nav className=" md:w-2/3 w-full shadow-xl border flex items-center rounded-2xl md:px-6 px-4 py-3 justify-between">
				<Link href="/" className="flex text-xl font-bold space-x-3">
					<RepliLogo size={24} />
					<h1>Repli AI</h1>
				</Link>

				<NavigationMenu>
					<NavigationMenuList className="flex items-center gap-3 md:gap-6 text-sm font-medium">
						<Link href="/pricing" className="text-black hover:text-gray-700 ">
							Pricing
						</Link>

						<Link
							href="https://x.com/rohitsxx"
							target="_blank"
							rel="noopener noreferrer"
						>
							<XLogo />
						</Link>

						<SignedOut>
							<SignInButton>
								<button className="cursor-pointer bg-whatsapp hover:bg-whatsapp-h text-white p-2 px-4 rounded-lg transition-colors duration-300">
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

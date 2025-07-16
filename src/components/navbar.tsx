import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { RepliLogo, XLogo } from "./logo";
import { TryNowOrIcon } from "./TryOrIcon";
import { StatusUi } from "./statusUiNavBar";

export const NavBar = () => {
	return (
		<div className="w-full py-8 px-4 flex  justify-center">
			<nav className=" md:w-2/3 w-full shadow-xl border flex items-center rounded-2xl md:px-6 px-4 py-3 justify-between">
				<Link href="/" className="flex text-xl font-bold space-x-3">
					<RepliLogo size={24} />
					<h1>Repli AI</h1>
				</Link>

				<NavigationMenu>
					<NavigationMenuList className="flex items-center justify-center gap-3 md:gap-6 text-sm font-medium">
						<StatusUi />
						<Link
							href="https://x.com/rohitsxx"
							target="_blank"
							rel="noopener noreferrer"
						>
							<XLogo />
						</Link>
						<TryNowOrIcon />
					</NavigationMenuList>
				</NavigationMenu>
			</nav>
		</div>
	);
};

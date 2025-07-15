import { RepliLogo } from "./logo";
import { Button } from "./ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="mt-10 md:mt-16 w-full flex flex-col items-center space-y-2">
      <div className="flex items-center justify-center gap-8 w-full md:w-3/5">
        <div className="flex items-center text-lg gap-2">
          <RepliLogo size={25} />
          <p className="font-bold">Repli AI</p>
        </div>
        <div>
          <Button variant="link">
            <Link href="/privacy-&-policy" className="text-sm">
              Privacy & Policy
            </Link>
          </Button>
        </div>
      </div>
      <div>
        <p className="text-xs">© 2025 Repli AI, All rights reserved.</p>
      </div>
    </div>
  );
};

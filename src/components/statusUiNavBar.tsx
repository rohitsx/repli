"use client";

import { useSessionStore } from "@/store/useSessionStore";
import { useEffect, useState } from "react";
import Link from "next/link";

export const StatusUi = () => {
  const session = useSessionStore((state) => state.session);

  const [path, setPath] = useState<string>("");

  const statusClass = "text-xs px-2 py-1 rounded-lg  font-medium";

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  if (path !== "/bot-setup")
    return (
      <Link href="/pricing" className={`text-black hover:text-gray-700 `}>
        Pricing
      </Link>
    );

  if (session?.user.paidUser) {
    return (
      <div className={`${statusClass} + bg-green-100 text-green-700`}>Pro</div>
    );
  }

  return (
    <div className={`${statusClass} bg-red-100 text-red-700`}>
      No active plan
    </div>
  );
};

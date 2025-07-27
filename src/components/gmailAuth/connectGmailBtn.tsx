"use client";

import { GmailIcon } from "../logo";
import { useRouter } from "next/navigation";
import { Button, LoadinBtn } from "../btn";
import { CheckIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Session } from "@/lib/auth-client";
import { Client_Domain } from "@/lib/env";

export const ConnectGmailBtn = ({
  authStatus,
  session,
}: {
  authStatus: string | null;
  session: Session;
}) => {
  const router = useRouter();

  const [authUrl, setAuthUrl] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const btnClass =
    "py-6 w-full space-x-1 bg-white text-black border cursor-pointer";

  useEffect(() => {
    const fetchAuthUrl = async () => {
      try {
        const res = await fetch(
          `${Client_Domain}/api/auth/gmail?email=${session.user.email}&id=${session.user.id}&name=${session.user.name}`,
        );
        const data = await res.json();
        setAuthUrl(data.authUrl);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch Gmail auth URL:", error);
      }
    };

    fetchAuthUrl();
  }, [session]);

  const handleSingin = async () => {
    if (!authUrl) throw new Error("your are not singing or url not found");
    setLoading(true);
    router.push(authUrl);
  };

  const Btn = () => (
    <Button
      className={btnClass}
      variant="outline"
      onClickAction={handleSingin}
      disabled={!!authStatus}
    >
      <GmailIcon />
      <p className="text-sm md:text-base ">
        {authStatus ? "Connected" : "Connect Gmail"}
      </p>
      {authStatus && <CheckIcon className="text-whatsapp" />}
    </Button>
  );

  return loading ? <LoadinBtn className={btnClass} /> : <Btn />;
};

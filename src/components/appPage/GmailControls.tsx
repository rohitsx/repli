import { GmailIcon } from "../logo";
import { InputField } from "./input-field";
import { Input } from "../ui/input";
import { useProfileStore } from "@/store/useProfileStore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Client_Domain } from "@/lib/env";
import { authClient } from "@/lib/auth-client";

export const GmailControls = () => {
  const { connectedGmail } = useProfileStore();
  const [authUrl, setAuthUrl] = useState("");

  const { data: session } = authClient.useSession();

  useEffect(() => {
    if (!session) return;
    const fetchAuthUrl = async () => {
      try {
        const res = await fetch(
          `${Client_Domain}/api/auth/gmail?email=${session.user.email}&id=${session.user.id}&name=${session.user.name}`,
        );
        const data = await res.json();
        setAuthUrl(data.authUrl);
      } catch (error) {
        console.error("Failed to fetch Gmail auth URL:", error);
      }
    };

    fetchAuthUrl();
  }, [session]);

  const btnClass =
    "flex p-2 gap-2 text-sm font-medium shadow-xs hover:bg-gray-50 justify-center items-center w-full border rounded-lg";

  const Icon = () => (
    <div className="w-4">
      <GmailIcon />
    </div>
  );

  return (
    <>
      <InputField id="email-account" label="Email Account">
        <Input
          id="email-account"
          className="placeholder:text-xs"
          value={connectedGmail}
          readOnly
        />
      </InputField>
      <div className="flex gap-3 w-full justify-center items-center">
        <Link href={authUrl} target="_blank" className={btnClass}>
          <Icon />
          Change Gmail
        </Link>
        <Link
          href="https://myaccount.google.com/connections"
          target="_blank"
          className={btnClass}
        >
          <Icon />
          Disconnect Gmail
        </Link>
      </div>
    </>
  );
};

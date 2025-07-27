"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SuccessPopup } from "../successPopup";
import { authClient } from "@/lib/auth-client";
import { updateSession } from "@/lib/session";
import { ConnectGmailBtn } from "./connectGmailBtn";
import { NumberInput } from "./numberInput";

export const GmailAuthCardContent = () => {
  const { data: session } = authClient.useSession();
  const [authStatus, setAuthStatus] = useState<string | null>(null);

  const router = useRouter();

  const [showSuccessPopup, setshowSuccessPopup] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("auth");
    const whatsappNoStatus = params.get("whatsapp-no");
    setAuthStatus(status);

    if (whatsappNoStatus && status) router.push("/app");
  }, [router]);

  useEffect(() => {
    (async () => {
      if (!session) return;
      const { paid_user, is_whatsapp_no, gmail_auth } = session.user;
      if (!paid_user || !is_whatsapp_no || !gmail_auth) await updateSession();
      console.log(session);
    })();
  }, [session]);

  if (!session) return <div></div>;

  return (
    <>
      {showSuccessPopup && <SuccessPopup />}
      <ConnectGmailBtn authStatus={authStatus} session={session} />
      <NumberInput
        authStatus={authStatus}
        setshowSuccessPopup={setshowSuccessPopup}
        session={session}
      />
    </>
  );
};

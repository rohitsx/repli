"use client";

import { ArrowRight } from "lucide-react";
import { TryNow } from "./TryOrIcon";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Dodo_Redirect_URL } from "@/lib/env";
import Link from "next/link";

export const GetStartedBtn = () => {
  const { data: session } = authClient.useSession();

  const [path, setPath] = useState<string>("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  const btnClass =
    "flex items-center gap-2 cursor-pointer bg-whatsapp hover:bg-whatsapp-h text-white p-3 px-6 md:px-8 md:py-4 rounded-lg transition-colors duration-300";

  const BtnContent = (
    <>
      Get Started
      <ArrowRight size={18} />
    </>
  );

  if (!session) {
    return (
      <TryNow
        TriggerAction={() => (
          <DialogTrigger className={btnClass}>{BtnContent}</DialogTrigger>
        )}
      />
    );
  }

  if (path === "/pricing") {
    return (
      <Link
        href={
          `${Dodo_Redirect_URL}&email=${session.user.email}&disableEmail=true&fullName=${session.user.name}&metadata_userId=${session.user.id}&metadata_name=${session.user.name}` ||
          ""
        }
        className={btnClass}
      >
        Get Started
        <ArrowRight size={18} />
      </Link>
    );
  }

  console.log(session.user);
  const getRedirectPath = () => {
    const { paid_user, is_whatsapp_no, gmail_auth } = session.user;

    if (!paid_user) return "/pricing";
    if (!is_whatsapp_no && !gmail_auth) return "/bot-setup";
    if (!is_whatsapp_no && gmail_auth) return "/bot-setup?auth=true";
    if (is_whatsapp_no && !gmail_auth) return "/bot-setup?whatsapp-no=true";
    return "/app";
  };

  const redirectPath = getRedirectPath();

  return (
    <Link href={redirectPath} className={btnClass}>
      {BtnContent}
    </Link>
  );
};

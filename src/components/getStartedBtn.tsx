"use client";

import { useSessionStore } from "@/store/useSessionStore";
import { ArrowRight } from "lucide-react";
import { TryNow } from "./TryOrIcon";
import { DialogTrigger } from "@radix-ui/react-dialog";

export const GetStartedBtn = () => {
  const session = useSessionStore((state) => state.session);
  const btnClass =
    "flex items-center gap-2 cursor-pointer bg-whatsapp hover:bg-whatsapp-h text-white p-2 px-6 md:px-8 md:py-4 rounded-lg transition-colors duration-300";
  console.log(session);

  const BtnContent = () => (
    <>
      Get Started
      <ArrowRight size={18} />
    </>
  );

  const TriggerAction = () => (
    <DialogTrigger className={btnClass}>
      <BtnContent />
    </DialogTrigger>
  );

  if (!session) return <TryNow TriggerAction={TriggerAction} />;

  return (
    <a href={session.user.paidUser ? "/bot-setup" : "/pricing"}>
      <button className={btnClass}>
        <BtnContent />
      </button>
    </a>
  );
};

"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { UserAvatar } from "./user-avatar";
import { updateSession } from "@/lib/session";
import { useProfileStore } from "@/store/useProfileStore";
import { UserPreferences } from "./userPreferences";
import { SaveBtn } from "./saveBtn";

export const AppContent = () => {
  const { data: session } = authClient.useSession();
  const {
    name,
    setName,
    whatsAppNo,
    setWhatsAppNo,
    emailSummaryTime,
    setEmailSummaryTime,
    setConnectedGmail,
    timeZone,
    setTimeZone,
  } = useProfileStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!session) return;

    const getPaidUser = async () => {
      const res = await fetch(`/api/db/paid-user?email=${session.user.email}`);
      const data = await res.json();

      const {
        name,
        gmail_auth_id,
        whatsapp_no,
        time_zone,
        summary_schedule_time,
      } = data;

      setName(name);
      setWhatsAppNo(whatsapp_no);
      setEmailSummaryTime(summary_schedule_time);
      setConnectedGmail(gmail_auth_id);
      setTimeZone(time_zone);
    };

    getPaidUser();

    const { paid_user, is_whatsapp_no, gmail_auth } = session.user;
    if (!paid_user || !is_whatsapp_no || !gmail_auth) updateSession();
  }, [session]);

  const handleSave = async () => {
    if (!session) return;

    setLoading(true);

    const res = await fetch(`/api/db/paid-user?email=${session.user.email}`, {
      method: "POST",
      body: JSON.stringify({ name, whatsAppNo, timeZone, emailSummaryTime }),
    });

    if (res.status !== 200) throw new Error("server error, try again");

    setLoading(false);
  };

  return (
    <div className="p-6 rounded-r-2xl sm:rounded-2xl bg-white h-full flex flex-col items-center space-y-9 placeholder:text-xs">
      <UserAvatar session={session} />
      <UserPreferences />
      <SaveBtn loading={loading} handleSave={handleSave} />
    </div>
  );
};

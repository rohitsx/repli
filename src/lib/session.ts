"use client";

import { useSessionStore } from "@/store/useSessionStore";
import { useEffect } from "react";

export const SessionProvider = ({ session }: { session: any }) => {
  const setSession = useSessionStore((state) => state.setSession);

  useEffect(() => {
    if (session) setSession(session);
  }, [session]);

  return null;
};

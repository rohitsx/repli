import { create } from "zustand";

type Store = {
  name: string;
  whatsAppNo: string;
  emailSummaryTime: string;
  connectedGmail: string;
  timeZone: string;
  setName: (val: string) => void;
  setWhatsAppNo: (val: string) => void;
  setEmailSummaryTime: (val: string) => void;
  setConnectedGmail: (val: string) => void;
  setTimeZone: (val: string) => void;
};

export const useProfileStore = create<Store>()((set) => ({
  name: "",
  whatsAppNo: "",
  emailSummaryTime: "",
  connectedGmail: "",
  timeZone: "",
  setName: (val: string) => set(() => ({ name: val })),
  setWhatsAppNo: (val: string) => set(() => ({ whatsAppNo: val })),
  setEmailSummaryTime: (val: string) => set(() => ({ emailSummaryTime: val })),
  setConnectedGmail: (val: string) => set(() => ({ connectedGmail: val })),
  setTimeZone: (val: string) => set(() => ({ timeZone: val })),
}));

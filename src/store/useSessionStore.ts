import { Session } from "better-auth";
import { create } from "zustand";

type SessionWithUser = {
	user: {
		id: string;
		name: string;
		emailVerified: boolean;
		email: string;
		createdAt: Date;
		updatedAt: Date;
		image?: string | null;
		paidUser: boolean;
		gmailAuth: boolean;
	};
	session: Session;
};

type SessionStore = {
	session: SessionWithUser | null;
	setSession: (session: SessionWithUser | null) => void;
	clearSession: () => void;
};

export const useSessionStore = create<SessionStore>((set) => ({
	session: null,
	setSession: (session) => set({ session }),
	clearSession: () => set({ session: null }),
}));

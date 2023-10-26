import { create } from "zustand";

type SessionStore = {
  session: string | null;
  login: () => void;
  logout: () => void;
};

export const useSession = create<SessionStore>((set) => ({
  session: "session",
  login: () => set({ session: "session" }),
  logout: () => set({ session: null }),
}));

import { create } from "zustand";

type User = {
  name: string;
};

type AuthStore = {
  user: User | null;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: () => set({ user: { name: "Delasi" } }),
  logout: () => set({ user: null }),
}));

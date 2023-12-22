import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type User = {
  uid: string;
  email: string | null;
  name: string | null;
  photoURL: string | null;
};

type AuthStore = {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
  setLoading: () => void;
  error: string;
  setError: (error: string) => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      loading: false,
      setLoading: () => set((state) => ({ loading: !state.loading })),
      error: "",
      setError: (error) => set({ error }),
    }),
    { name: "auth", storage: createJSONStorage(() => AsyncStorage) },
  ),
);

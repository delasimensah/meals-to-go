import { create } from "zustand";

import { Location } from "@/types";

type LocationStore = {
  keyword: string;
  setKeyword: (keyword: string) => void;
  locLoading: boolean;
  setLocLoading: (locLoading: boolean) => void;
  location: null | Location;
  setLocation: (location: null | Location) => void;
  locError: string;
  setLocError: (error: string) => void;
};

export const useLocationStore = create<LocationStore>((set) => ({
  keyword: "Toronto",
  setKeyword: (keyword) => set({ keyword }),
  locLoading: false,
  setLocLoading: (locLoading) => set({ locLoading }),
  location: null,
  setLocation: (location) => set({ location }),
  locError: "",
  setLocError: (locError) => set({ locError }),
}));

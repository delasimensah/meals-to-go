import { create } from "zustand";

import { Restaurant } from "@/types";

type RestaurantsStore = {
  restaurants: Restaurant[];
  setRestaurants: (retaurants: Restaurant[]) => void;
  resLoading: boolean;
  setResLoading: (resLoading: boolean) => void;
  resError: string;
  setResError: (error: string) => void;
};

export const useRestaurantsStore = create<RestaurantsStore>((set) => ({
  restaurants: [],
  setRestaurants: (restaurants) => set({ restaurants }),
  resLoading: false,
  setResLoading: (resLoading) => set({ resLoading }),
  resError: "",
  setResError: (resError) => set({ resError }),
}));

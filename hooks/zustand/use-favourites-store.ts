import { create } from "zustand";

import { Restaurant } from "@/types";

type FavouritesStore = {
  favourites: Restaurant[];
  setFavourites: (favourites: Restaurant[]) => void;
};

export const useFavouritesStore = create<FavouritesStore>((set) => ({
  favourites: [],
  setFavourites: (favourites) => set({ favourites }),
}));

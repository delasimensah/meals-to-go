import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Restaurant } from "@/types";

type FavouritesStore = {
  favourites: Restaurant[];
  setFavourites: (favourites: Restaurant[]) => void;
};

export const useFavouritesStore = create<FavouritesStore>()(
  persist(
    (set) => ({
      favourites: [],
      setFavourites: (favourites) => set({ favourites }),
    }),
    { name: "favourites", storage: createJSONStorage(() => AsyncStorage) },
  ),
);

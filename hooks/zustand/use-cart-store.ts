import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { CartItem, Restaurant } from "@/types";

type CartStore = {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  restaurant: Restaurant | null;
  setRestaurant: (restaurant: Restaurant | null) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      setCart: (cart) => set({ cart }),
      restaurant: null,
      setRestaurant: (restaurant) => set({ restaurant }),
    }),
    { name: "cart", storage: createJSONStorage(() => AsyncStorage) },
  ),
);

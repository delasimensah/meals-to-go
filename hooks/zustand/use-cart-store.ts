import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Restaurant } from "@/types";

type CartStore = {
  cart: Restaurant[];
  addToCart: (restaurant: Restaurant) => void;
  removeFromCart: (restaurant: Restaurant) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (restaurant) =>
        set((state) => ({
          cart: [...state.cart, restaurant],
        })),
      removeFromCart: (restaurant) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) => item.placeId !== restaurant.placeId,
          ),
        })),
      clearCart: () =>
        set({
          cart: [],
        }),
    }),
    { name: "cart", storage: createJSONStorage(() => AsyncStorage) },
  ),
);

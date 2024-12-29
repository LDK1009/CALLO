import { CartStoreType } from "@/types/store/cart.type";
import { create } from "zustand";

export const useCartStore = create<CartStoreType>((set) => ({
  items: [],
  setItems: (items) => set(() => ({ items: items })),
}));

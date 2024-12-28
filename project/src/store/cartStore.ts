import { CartState } from "@/types/store/cart.type";
import { create } from "zustand";

export const useCartStore = create<CartState>((set) => ({
  items: [],
  setItems: (items) => set(() => ({ items: items })),
}));

import { CartState } from "@/types/store/cart.type";
import { create } from "zustand";

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.product_id !== id) })),
}));

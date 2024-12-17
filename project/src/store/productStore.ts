import { ProductState } from "@/types/store/product.type";
import { create } from "zustand";

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));

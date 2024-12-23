import { ProductState } from "@/types/store/product.type";
import { create } from "zustand";

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  majorCategory:"zero_calories",
  middleCategory:"",
  setProducts: (products) => set({ products }),
  setMajorCategory: (majorCategory) => set({ majorCategory }),
  setMiddleCategory: (middleCategory) => set({ middleCategory }),
}));

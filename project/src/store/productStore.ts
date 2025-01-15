import { ProductState } from "@/types/store/product.type";
import { create } from "zustand";

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  popularProducts: [],
  majorCategory: "low_sugar",
  middleCategory: "",
  searchString: "",
  setProducts: (products) => set({ products }),
  setPopularProducts: (popularProducts) => set({ popularProducts }),
  setMajorCategory: (majorCategory) => set({ majorCategory }),
  setMiddleCategory: (middleCategory) => set({ middleCategory }),
  setSearchString: (searchString) => set({ searchString }),
}));

import { SidebarStoreType } from "@/types/store/sidebar.type";
import { create } from "zustand";

export const useSidebarStore = create<SidebarStoreType>((set) => ({
  isOpen: false,
  items: [
    { text: "제로 칼로리", isSelect: false, query: "zero_calories" },
    { text: "로우 칼로리", isSelect: false, query: "low_calories" },
    { text: "제로 슈가", isSelect: false, query: "zero_sugar" },
    { text: "로우 슈가", isSelect: false, query: "low_sugar" },
  ],
  setItem: (index) =>
    set((state) => ({
      items: state.items.map((el, i) => (i === index ? { ...el, isSelect: true } : { ...el, isSelect: false })),
    })),
  open: () => set((state) => ({ ...state, isOpen: true })),
  close: () => set((state) => ({ ...state, isOpen: false })),
}));

import { SidebarStoreType } from "@/types/store/sidebar.type";
import { create } from "zustand";

export const useSidebarStore = create<SidebarStoreType>((set) => ({
  isOpen: false,
  isSecondOpen:false,
  items: [
    { text: "제로 칼로리", isSelect: false, query: "zero_calories" },
    { text: "로우 칼로리", isSelect: false, query: "low_calories" },
    { text: "제로 슈가", isSelect: false, query: "zero_sugar" },
    { text: "로우 슈가", isSelect: false, query: "low_sugar" },
  ],
  items2: [
    { text: "전체", query: "", isSelect: false },
    { text: "음료", query: "beverage", isSelect: false },
    { text: "간식", query: "snack", isSelect: false },
    { text: "빵", query: "bread", isSelect: false },
    { text: "면", query: "noodle", isSelect: false },
    { text: "아이스크림", query: "ice_cream", isSelect: false },
    { text: "냉동", query: "frozen", isSelect: false },
    { text: "통조림", query: "canned", isSelect: false },
    { text: "소스", query: "sauce", isSelect: false },
    { text: "밥/죽", query: "rice_porridge", isSelect: false },
    { text: "도시락", query: "lunch_box", isSelect: false },
    { text: "유제품", query: "dairy", isSelect: false },
  ],
  setItem: (index) =>
    set((state) => ({
      items: state.items.map((el, i) => (i === index ? { ...el, isSelect: true } : { ...el, isSelect: false })),
    })),
  setItem2: (index) =>
    set((state) => ({
      items2: state.items2.map((el, i) => (i === index ? { ...el, isSelect: true } : { ...el, isSelect: false })),
    })),
  open: () => set((state) => ({ ...state, isOpen: true })),
  close: () => set((state) => ({ ...state, isOpen: false })),
  secondOpen: () => set((state) => ({ ...state, isSecondOpen: true })),
  secondClose: () => set((state) => ({ ...state, isSecondOpen: false })),
}));

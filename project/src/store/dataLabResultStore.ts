import { DataLabResultStoreType } from "@/types/store/dataLabResult.type";
import { create } from "zustand";

export const useDataLabResultStore = create<DataLabResultStoreType>((set) => ({
  items: [],
  isOpen: false,
  sort: "calories",
  unit: "",
  setItems: (items) => set(() => ({ items: items })),
  setIsOpen: (value) => set(() => ({ isOpen: value })),
  setSort: (value) => set(() => ({ sort: value })),
  setUnit: (value) => set(() => ({ unit: value })),
}));

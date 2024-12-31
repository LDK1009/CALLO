import { DataLabResultStoreType } from "@/types/store/dataLabResult.type";
import { create } from "zustand";

export const useDataLabResultStore = create<DataLabResultStoreType>((set) => ({
  items: [],
  isOpen: false,
  setItems: (items) => set(() => ({ items: items })),
  setIsOpen: (value) => set(() => ({ isOpen: value })),
}));

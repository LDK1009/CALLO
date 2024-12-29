import { DataLabStoreType } from "@/types/store/dataLab.type";
import { create } from "zustand";

export const useDataLabStore = create<DataLabStoreType>((set) => ({
  items: [],
  setItems: (items) => set(() => ({ items: items })),
}));

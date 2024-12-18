import { ModalState } from "@/types/store/modal.type";
import { create } from "zustand";

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: "",
  content: "",
  open: ({ title, content }) => set((state) => ({ ...state, isOpen: true, title: title, content: content })),
  close: () => set((state) => ({ ...state, isOpen: false })),
}));

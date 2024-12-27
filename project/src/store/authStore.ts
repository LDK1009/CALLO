import { AuthStoreType } from "@/types/store/auth.type";
import { create } from "zustand";

export const useAuthStore = create<AuthStoreType>((set) => ({
  isLogin: false,
  setIsLogin: (value) => set({ isLogin: value }),
  uid: "",
  setUid: (value) => set({ uid: value }),
  email: "",
  setEmail: (value) => set({ email: value }),
}));

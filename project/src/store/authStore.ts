import { AuthState } from "@/types/store/auth.type";
import { create } from "zustand";

export const useAuthStore = create<AuthState>((set) => ({
  isLogin: false,
  userId: null,
  userInfo: null,
  login: (id) => set({ isLogin: true, userId: id }),
  logout: () => set({ isLogin: false, userId: null }),
}));

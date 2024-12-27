import { AuthStoreType } from "@/types/store/auth.type";
import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

// Custom storage for zustand
const customStorage: PersistStorage<AuthStoreType> = {
  getItem: (name) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
};

export const useAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: (value) => set({ isLogin: value }),
      uid: "",
      setUid: (value) => set({ uid: value || "" }),
      email: "",
      setEmail: (value) => set({ email: value || "" }),
    }),
    {
      name: "auth-storage",
      storage: customStorage, // Custom storage
    }
  )
);

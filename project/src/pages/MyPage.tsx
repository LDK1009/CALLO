"use client";

import DataLabAndCart from "@/components/my-page/DataLabAndCart";
import MenuList from "@/components/my-page/MenuList";
import Profile from "@/components/my-page/Profile";
import useAuth from "@/hooks/auth/useAuth";
import { useAuthStore } from "@/store";
import { useEffect } from "react";
import SignIn from "./SignIn";

const MyPage = () => {
  const { handleIsLogin } = useAuth();
  const { isLogin } = useAuthStore();

  async function sessionCheck() {
    await handleIsLogin();
  }

  useEffect(() => {
    sessionCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLogin ? (
    <div>
      <Profile />
      <DataLabAndCart />
      <MenuList />
    </div>
  ) : (
    <SignIn />
  );
};

export default MyPage;

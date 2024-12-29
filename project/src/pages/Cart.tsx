"use client";

import CartProductList from "@/components/cart/CartProductList";
import Controller from "@/components/cart/Controller";
import DataLabBanner from "@/components/cart/DataLabBanner";
import { useAuthStore } from "@/store";
import SignIn from "./SignIn";

const Cart = () => {
  const { isLogin } = useAuthStore();
  return isLogin ? (
    <div>
      <DataLabBanner />
      <Controller />
      <CartProductList />
    </div>
  ) : (
    <SignIn />
  );
};

export default Cart;

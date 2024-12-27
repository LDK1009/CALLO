"use client";

import CartProductList from "@/components/cart/CartProductList";
import Controller from "@/components/cart/Controller";
import DataLabBanner from "@/components/cart/DataLabBanner";

const Cart = () => {
  return (
    <div>
      <DataLabBanner />
      <Controller />
      <CartProductList />
    </div>
  );
};

export default Cart;

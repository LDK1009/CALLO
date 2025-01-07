"use client";

import styled from "styled-components";
import CartProduct from "./CartProduct";
import useCarts from "@/hooks/cart/useCarts";
import { useAuthStore, useCartStore } from "@/store";
import { useEffect } from "react";

const CartProductList = () => {
  const { handleGetCarts } = useCarts();
  const { items } = useCartStore();
  const { uid } = useAuthStore();

  async function dataFetch() {
    await handleGetCarts(uid);
  }

  useEffect(() => {
    if (uid) {
      dataFetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  const RenderCartProducts = items?.map((el, idx) => {
    return <CartProduct key={idx} index={idx} info={el} />;
  });

  return <Container>{RenderCartProducts}</Container>;
};

export default CartProductList;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 0px 16px;
`;

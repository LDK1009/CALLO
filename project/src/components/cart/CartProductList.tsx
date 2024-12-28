"use client";

import styled from "styled-components";
import CartProduct from "./CartProduct";
import useCarts from "@/hooks/cart/useCarts";
import { useAuthStore, useCartStore } from "@/store";
import { useEffect } from "react";

const CartProductList = () => {
  /////////////////
  const { handleGetCarts } = useCarts();
  const {items} = useCartStore();
  const { uid } = useAuthStore();

  async function testFunc() {
    await handleGetCarts(uid);
  }

  useEffect(() => {
    if (uid) {
      testFunc();
    }
  }, [uid]);

  ////////////////

  const cartProducts = [
    {
      name: "코카콜라 제로 350mL 24개",
      link: "https://mui.com/material-ui/getting-started/",
      src: "https://t3c.coupangcdn.com/thumbnails/remote/212x212ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 800,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "https://mui.com/material-ui/getting-started/",
      src: "https://t3c.coupangcdn.com/thumbnails/remote/212x212ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 800,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "https://mui.com/material-ui/getting-started/",
      src: "https://t3c.coupangcdn.com/thumbnails/remote/212x212ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 800,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "https://mui.com/material-ui/getting-started/",
      src: "https://t3c.coupangcdn.com/thumbnails/remote/212x212ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 800,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "https://mui.com/material-ui/getting-started/",
      src: "https://t3c.coupangcdn.com/thumbnails/remote/212x212ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 800,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "https://mui.com/material-ui/getting-started/",
      src: "https://t3c.coupangcdn.com/thumbnails/remote/212x212ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 800,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "https://mui.com/material-ui/getting-started/",
      src: "https://t3c.coupangcdn.com/thumbnails/remote/212x212ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 800,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "https://mui.com/material-ui/getting-started/",
      src: "https://t3c.coupangcdn.com/thumbnails/remote/212x212ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 800,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "https://mui.com/material-ui/getting-started/",
      src: "https://t3c.coupangcdn.com/thumbnails/remote/212x212ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 800,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "https://mui.com/material-ui/getting-started/",
      src: "https://t3c.coupangcdn.com/thumbnails/remote/212x212ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 800,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
  ];

  const RenderCartProducts = items.map((el, idx) => {
    return <CartProduct key={idx} info={el} />;
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

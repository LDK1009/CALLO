"use client";

import styled from "styled-components";
import DataLabProduct from "./DataLabProduct";

const DataLabProductList = () => {
  const dataLabProducts = [
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

  const RenderCartProducts = dataLabProducts.map((el, idx) => {
    return <DataLabProduct key={idx} info={el} />;
  });

  return <Container>{RenderCartProducts}</Container>;
};

export default DataLabProductList;

const Container = styled.div`
  width: 100%;
  height: 548px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 0px 16px;
  overflow-y: auto;
  /* 스크롤바 제거 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

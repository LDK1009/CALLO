import styled from "styled-components";
import Product from "../common/view/Product";

const ProductGrid = () => {
  const products = [
    {
      name: "코카콜라 제로 350mL 24개",
      link: "http://localhost:3000/",
      src: "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 240,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "http://localhost:3000/",
      src: "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 240,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "http://localhost:3000/",
      src: "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 240,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "http://localhost:3000/",
      src: "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 240,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "http://localhost:3000/",
      src: "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 240,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "http://localhost:3000/",
      src: "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 240,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "http://localhost:3000/",
      src: "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 240,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "http://localhost:3000/",
      src: "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 240,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "http://localhost:3000/",
      src: "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 240,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
    {
      name: "코카콜라 제로 350mL 24개",
      link: "http://localhost:3000/",
      src: "https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/1025_amir_coupang_oct_80k/68e0/b479e672203ae019bc9955315b5d689938cedc730d74075d1c042734f2f0.jpg",
      price: 32000,
      price_per_piece: 240,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    },
  ];

  const RenderProducts = products.map((el, idx) => {
    return <Product key={idx} info={el} />;
  });

  return <Container>{RenderProducts}</Container>;
};

export default ProductGrid;

const Container = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  row-gap: 40px;
  flex-wrap: wrap;
`;

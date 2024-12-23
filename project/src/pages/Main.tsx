"use client";

import ProductGrid from "@/components/home/ProductGrid";
import CategoryScrollX from "@/components/main/view/CategoryScrollX";
import styled from "styled-components";

const Main = () => {
  return (
    <Conatainer>
      <CategoryScrollX/>
      <ProductGrid />
    </Conatainer>
  );
};

export default Main;

const Conatainer = styled.div`
  padding-top: 50px;
`;

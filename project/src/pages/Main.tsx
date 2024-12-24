"use client";

import ProductGrid from "@/components/common/ProductGrid";
import CategoryScrollX from "@/components/main/CategoryScrollX";
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
`;

import styled from "styled-components";
import { useProductStore } from "@/store";
import { useEffect } from "react";
import useProducts from "@/hooks/product/useProducts";
import Product from "../common/Product";

const PopularProductGrid = () => {
  const { popularProducts } = useProductStore();
  const { handleGetPopularProducts } = useProducts();

  useEffect(() => {
    handleGetPopularProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RenderProducts = popularProducts?.map((el, idx) => {
    return <Product key={idx} info={el} />;
  });

  return <Container>{RenderProducts}</Container>;
};

export default PopularProductGrid;

const Container = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  row-gap: 40px;
  flex-wrap: wrap;
`;

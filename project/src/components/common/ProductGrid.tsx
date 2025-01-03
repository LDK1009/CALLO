import styled from "styled-components";
import Product from "./Product";
import { useProductStore } from "@/store";
import { useEffect } from "react";
import useProducts from "@/hooks/product/useProducts";
import CoupangText from "./CoupangText";

const ProductGrid = () => {
  const { products, majorCategory, middleCategory } = useProductStore();
  const { handleGetProducts } = useProducts();

  useEffect(() => {
    handleGetProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [majorCategory, middleCategory]);

  const RenderProducts = products?.map((el, idx) => {
    return <Product key={idx} info={el} />;
  });

  return (
    <Container>
      {RenderProducts}
      <CoupangText />
    </Container>
  );
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

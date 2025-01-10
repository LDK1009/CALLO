import styled from "styled-components";
import Product from "./Product";
import { useProductStore } from "@/store";
import CoupangText from "./CoupangText";
import FilterText from "./FilterText";

const ProductGrid = () => {
  const { products } = useProductStore();

  const RenderProducts = products?.map((el, idx) => {
    return <Product key={idx} info={el} />;
  });

  return (
    <>
      <FilterText />
      {products && products?.length > 0 ? (
        <Container>
          {RenderProducts}
          <CoupangText />
        </Container>
      ) : (
        <Nodata>상품이 없어요😥</Nodata>
      )}
    </>
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

const Nodata = styled.div`
  padding-top: 300px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

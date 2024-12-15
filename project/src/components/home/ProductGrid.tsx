import styled from "styled-components";

const ProductGrid = () => {
  const products = [
    { name: "상품1", src: "" },
    { name: "상품2", src: "" },
    { name: "상품3", src: "" },
    { name: "상품4", src: "" },
    { name: "상품5", src: "" },
    { name: "상품6", src: "" },
    { name: "상품7", src: "" },
    { name: "상품8", src: "" },
  ];

  const RenderProducts = products.map((el, idx) => {
    return <Product key={idx}>{el.name}</Product>;
  });

  return <Container>{RenderProducts}</Container>;
};

export default ProductGrid;

const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const Product = styled.div`
  width: 160px;
  height: 160px;
  background-color: #ccddaa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import styled from "styled-components";
import ProductGrid from "./ProductGrid";

const PopularProduct = () => {
  return (
    <Container>
      <TitleContainer>
        <TitleIcon src="/heart.png" />
        <TitleText>인기 상품</TitleText>
      </TitleContainer>
      <ProductGrid />
    </Container>
  );
};

export default PopularProduct;

const Container = styled.div`
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 20px;
`;

const TitleIcon = styled.img`
  width: 12px;
  height: 10px;
  margin-right: 4px;
`;

const TitleText = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

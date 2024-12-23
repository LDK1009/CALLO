import styled from "styled-components";
import ProductGrid from "../common/ProductGrid";
import { Typography } from "@mui/material";

const PopularProduct = () => {
  return (
    <Container>
      <TitleContainer>
        <TitleText variant="body1">인기 상품</TitleText>
      </TitleContainer>
      <ProductGrid />
    </Container>
  );
};

export default PopularProduct;

const Container = styled.div`
  width: 100%;
`;

const TitleContainer = styled.div`
  padding: 0px 8px;
  display: flex;
  align-items: center;
  height: 20px;
`;

const TitleText = styled(Typography)`
  font-weight: bold !important;
`;

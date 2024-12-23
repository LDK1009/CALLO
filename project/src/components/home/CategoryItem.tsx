import { Typography } from "@mui/material";
import styled from "styled-components";

type propsType = {
  src: string;
  label: string;
};

const CategoryItem = ({ src, label }: propsType) => {
  return (
    <Container>
      <Img src={src} alt="" />
      <Text align="center">{label}</Text>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div``;

const Img = styled.img`
  width: 50px;
`;

const Text = styled(Typography)`
  font-size: 10px !important;
  width: 100%;
`;

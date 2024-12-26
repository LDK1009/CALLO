import { useProductStore } from "@/store";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import styled from "styled-components";

type propsType = {
  src: string;
  label: string;
  query: string;
};

const CategoryItem = ({ src, label, query }: propsType) => {
  const router = useRouter();
  const setMiddleCategory = useProductStore((state) => state.setMiddleCategory);

  return (
    <Container
      onClick={() => {
        setMiddleCategory(query);
        router.push("/main");
      }}
    >
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

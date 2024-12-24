"use client";

import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <Img
        src="/img/로고 배너1.png"
        onClick={() => {
          router.push("/");
        }}
      />
      <ArrowBackIosNewOutlinedIcon
        onClick={() => {
          router.back();
        }}
      />
      <RightIconsGroup>
        <SearchOutlinedIcon
          onClick={() => {
            router.push("/search");
          }}
        />
        <ShoppingBagOutlinedIcon
          onClick={() => {
            router.push("/cart");
          }}
        />
      </RightIconsGroup>
    </Container>
  );
};

export default Header;

const Img = styled.img`
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 50px;
  z-index: 100;
`;

const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 0px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 100;
  background-color: white;
`;

const RightIconsGroup = styled.div`
  display: flex;
  gap: 8px;
`;

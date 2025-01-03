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
      <ImgBox>
        <Img
          src="/img/로고 배너1.png"
          onClick={() => {
            router.push("/");
          }}
        />
      </ImgBox>
      <ArrowBackIosNewOutlinedIcon
        onClick={() => {
          router.back();
        }}
      />
      <RightIconsGroup>
        <SearchOutlinedIcon
          onClick={() => {
            alert("개발중인 기능입니다!");
            // router.push("/search");
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

const ImgBox = styled.div`
  width: 140px;
  height: 50px;
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  height: 35px;
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

"use client";

import styled from "styled-components";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PentagonOutlinedIcon from "@mui/icons-material/PentagonOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useRouter } from "next/navigation";
import { useSidebarStore } from "@/store/sidebarStore";

const AppBar = () => {
  const router = useRouter();
  const { open } = useSidebarStore();

  return (
    <Container>
      <LogoImg
        src="/img/logo-1.png"
        onClick={() => {
          router.push("/");
        }}
      />
      {/* 메뉴 */}
      <IconWrap onClick={open}>
        <MenuIcon />
      </IconWrap>
      {/* 장바구니(현재) */}
      {/* 게시글(예정) */}
      <IconWrap
        onClick={() => {
          router.push("/cart");
        }}
      >
        <ShoppingBagOutlinedIcon />
      </IconWrap>
      {/* 홈 */}
      <EmptyArea />
      {/* 데이터랩 */}
      <IconWrap
        onClick={() => {
          router.push("/data-lab");
        }}
      >
        <PentagonIcon />
      </IconWrap>
      {/* 마이페이지 */}
      <IconWrap
        onClick={() => {
          router.push("/my-page");
        }}
      >
        <UserIcon />
      </IconWrap>
    </Container>
  );
};

export default AppBar;

const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0px;
  background-color: white;
  z-index:100;

  & svg {
    width: 30px !important;
    height: 30px !important;
    color: var(--black);
  }
`;

const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 5px;
`;

const EmptyArea = styled.div`
  width: 80px;
  height: 30px;
`;

const IconWrap = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuIcon = styled(MenuOutlinedIcon)``;

// 게시글 개발 후 사용 예정
// const ArticleIcon = styled(ArticleOutlinedIcon)``;

const PentagonIcon = styled(PentagonOutlinedIcon)``;

const UserIcon = styled(PersonOutlinedIcon)``;

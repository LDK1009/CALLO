"use client";

import styled from "styled-components";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import PentagonOutlinedIcon from "@mui/icons-material/PentagonOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Link from "next/link";

const AppBar = () => {
  return (
    <Container>
      {/* 메뉴 */}
      <IconWrap>
        <Link href="/main">
          <MenuIcon />
        </Link>
      </IconWrap>
      {/* 게시글 */}
      <IconWrap>
        <Link href="/main">
          <ArticleIcon />
        </Link>
      </IconWrap>
      {/* 홈 */}
      <IconWrap>
        <Link href="/main">
          <HomeIcon />
        </Link>
      </IconWrap>
      {/* 데이터랩 */}
      <IconWrap>
        <Link href="/main">
          <PentagonIcon />
        </Link>
      </IconWrap>
      {/* 마이페이지 */}
      <IconWrap>
        <Link href="/main">
          <UserIcon />
        </Link>
      </IconWrap>
    </Container>
  );
};

export default AppBar;

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0px;
  left: 0px;
  backdrop-filter: blur(10px); /* 블러 효과 */

  & > div > a > svg {
    width: 30px !important;
    height: 30px !important;
    color: var(--main-color);
  }
`;

const IconWrap = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuIcon = styled(MenuOutlinedIcon)``;

const ArticleIcon = styled(ArticleOutlinedIcon)``;

const HomeIcon = styled(CottageOutlinedIcon)``;

const PentagonIcon = styled(PentagonOutlinedIcon)``;

const UserIcon = styled(PersonOutlinedIcon)``;

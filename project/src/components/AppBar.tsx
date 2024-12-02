"use client";

import styled from "styled-components";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import Pentagon from "./icons/Pentagon";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const AppBar = () => {
  return (
    <Container>
      <MenuIcon />
      <ArticleIcon />
      <HomeIcon />
      <Pentagon fill="none" stroke="--main-color" strokeWidth="2" />
      <UserIcon />
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
  background-color: gray;

  & > svg {
    width: 30px !important;
    height: 30px !important;
    color: var(--main-color);
  }
`;

const MenuIcon = styled(MenuOutlinedIcon)``;

const ArticleIcon = styled(ArticleOutlinedIcon)``;

const HomeIcon = styled(CottageOutlinedIcon)``;

const UserIcon = styled(PersonOutlinedIcon)``;

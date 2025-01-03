"use client";

import styled from "styled-components";
import Menu from "./Menu";
import {
  CampaignOutlined,
  ContactSupportOutlined,
  LogoutOutlined,
  PersonRemoveAlt1Outlined,
  PostAddOutlined,
} from "@mui/icons-material";
import useAuth from "@/hooks/auth/useAuth";

const MenuList = () => {

  const {handleSignOut} = useAuth();

  const menuArr = [
    {
      icon: <CampaignOutlined />,
      text: "공지사항",
      onClick: () => {
        alert("개발중인 기능입니다!");
      },
    },
    {
      icon: <ContactSupportOutlined />,
      text: "1:1 문의",
      onClick: () => {
        alert("개발중인 기능입니다!");
      },
    },
    {
      icon: <PostAddOutlined />,
      text: "상품 추가 요청",
      onClick: () => {
        alert("개발중인 기능입니다!");
      },
    },
    {
      icon: <LogoutOutlined />,
      text: "로그아웃",
      onClick: () => {
        handleSignOut();
      },
    },
    {
      icon: <PersonRemoveAlt1Outlined />,
      text: "회원탈퇴",
      onClick: () => {
        alert("개발중인 기능입니다!");
      },
    },
  ];

  const RenderMenuArr = menuArr.map((el, idx) => {
    return <Menu key={idx} icon={el.icon} text={el.text} onClick={el.onClick} />;
  });
  return <Container>{RenderMenuArr}</Container>;
};

export default MenuList;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

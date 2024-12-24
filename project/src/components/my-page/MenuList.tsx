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

const MenuList = () => {
  const menuArr = [
    {
      icon: <CampaignOutlined />,
      text: "공지사항",
      onClick: () => {
        alert("공지사항");
      },
    },
    {
      icon: <ContactSupportOutlined />,
      text: "1:1 문의",
      onClick: () => {
        alert("1:1 문의");
      },
    },
    {
      icon: <PostAddOutlined />,
      text: "상품 추가 요청",
      onClick: () => {
        alert("상품 추가 요청");
      },
    },
    {
      icon: <LogoutOutlined />,
      text: "로그아웃",
      onClick: () => {
        alert("로그아웃");
      },
    },
    {
      icon: <PersonRemoveAlt1Outlined />,
      text: "회원탈퇴",
      onClick: () => {
        alert("회원탈퇴");
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

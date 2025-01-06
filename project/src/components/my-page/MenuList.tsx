"use client";

import styled from "styled-components";
import Menu from "./Menu";
import {
  CampaignOutlined,
  ContactSupportOutlined,
  LogoutOutlined,
  PersonRemoveAlt1Outlined,
  PostAddOutlined,
  DownloadForOfflineOutlined,
} from "@mui/icons-material";
import useAuth from "@/hooks/auth/useAuth";

const MenuList = () => {
  const { handleSignOut } = useAuth();

  const menuArr = [
    {
      icon: <DownloadForOfflineOutlined />,
      text: "앱 다운로드",
      onClick: () => {
        window.open("https://dune-volleyball-962.notion.site/CALLO-173bebe7ec3b8034bca3e6a138e89ecd?pvs=4", "_blank");
      },
    },
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
        window.open("https://open.kakao.com/o/sUNuT28g", "_blank");
      },
    },
    {
      icon: <PostAddOutlined />,
      text: "상품 추가 요청",
      onClick: () => {
        window.open("https://open.kakao.com/o/st9CV28g", "_blank");
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
        alert("개발중인 기능입니다!\nm3088787@gmail.com 으로 문의 부탁드립니다!");
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

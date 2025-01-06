"use client";

import { useAuthStore } from "@/store";
import { EditOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import styled from "styled-components";

const Profile = () => {
  const { email } = useAuthStore();

  function extractUsername(email: string) {
    const match = email.match(/^([^@]+)/);
    return match ? match[1] : null; // Return username or null if no match
  }

  return (
    <Container>
      <Img src="/img/로고1.png" />
      <BedgeIdWrap>
        <Bedge level="bronze">Bronze</Bedge>
        <Id variant="h6">{extractUsername(email)}</Id>
      </BedgeIdWrap>
      <EditWrap onClick={() => alert("개발중인 기능입니다!")}>
        <EditOutlined />
      </EditWrap>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 16px;
  margin: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  border: 2px solid var(--main-color);
  border-radius: 100%;
  width: 100px;
  height: 100px;
`;

const BedgeIdWrap = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

type BedgeType = {
  level: string;
};

const Bedge = styled.div<BedgeType>`
  width: 90px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: ${({ level }) => {
    if (level === "bronze") {
      return "#624637";
    }
  }};
`;

const Id = styled(Typography)`
  font-weight: bold !important;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const EditWrap = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color);
  & svg {
    width: 30px;
    height: 30px;
    color: var(--secondary-color);
  }
`;

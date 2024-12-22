"use client";

import { Button, Typography } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

const EmailSent = () => {
  return (
    <Container>
      <Typography variant="h5" align="center" style={{ fontWeight: "bold" }}>
        이메일 인증을 통해
        <br />
        회원가입을 완료해주세요!
      </Typography>
      <ButtonWrap>
        <LinkButton href="https://mail.naver.com/" variant="outlined">
          <ButtonLogoImg src="/img/네이버 로고.png" alt="네이버" width={30} height={30} />
          <span>네이버 메일 바로가기</span>
        </LinkButton>
        <LinkButton href="https://mail.google.com/" variant="outlined">
          <ButtonLogoImg src="/img/구글 로고.png" alt="구글" width={30} height={30} />
          <span>구글 메일 바로가기</span>
        </LinkButton>
      </ButtonWrap>
    </Container>
  );
};

export default EmailSent;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 50px 16px 0px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 40px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;
const LinkButton = styled(Button)`
  width: 100%;
  height: 50px;
  font-size: 16px !important;
  background-color: var(--secondary-color) !important;
  color: var(--main-color) !important;
  border: 2px solid var(--main-color) !important;
  text-transform: none !important; /* 기본 대문자 변환 비활성화 */
`;

const ButtonLogoImg = styled(Image)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

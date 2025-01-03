"use client";

import { useState } from "react";
import useAuth from "@/hooks/auth/useAuth";
import { Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignIn } = useAuth();

  // 로그인 처리 함수
  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    handleSignIn({ email, password });
  };

  return (
    <Container>
      <ImgWrap>
        <LogoImg src="/img/로고 배너1.png" />
      </ImgWrap>
      <Form onSubmit={signIn}>
        <InputWrap>
          <EmailInput
            id="email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
          />

          <PasswordInput
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="비밀번호 입력"
          />
        </InputWrap>
        <ButtonWrap>
          <SignInButton onClick={signIn} variant="contained" type="submit" disableElevation>
            로그인
          </SignInButton>
          <SignUpButton href="/sign-up" variant="outlined">
            회원가입
          </SignUpButton>
        </ButtonWrap>
      </Form>
      <FindPassword variant="caption" align="right" onClick={()=>{
        alert("개발중인 기능입니다!\nm3088787@gmail.com 으로 문의 부탁드립니다!")
      }}>
        비밀번호 찾기
      </FindPassword>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  padding: 50px 16px 0px 16px;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: auto;
  margin: 80px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 325px;
  height: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

const InputWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const EmailInput = styled(TextField)`
  width: 100%;
  height: 50px;
`;

const PasswordInput = styled(EmailInput)``;

const ButtonWrap = styled(InputWrap)`
  row-gap: 12px;
`;

const SignInButton = styled(Button)`
  width: 100%;
  height: 50px;
  font-size: 16px !important;
  background-color: var(--main-color) !important;
`;

const SignUpButton = styled(SignInButton)`
  background-color: var(--secondary-color) !important;
  color: var(--main-color) !important;
  border: 2px solid var(--main-color) !important;
`;

const FindPassword = styled(Typography)`
  display: block;
  margin-top: 12px !important;
  color: var(--gray);
`;

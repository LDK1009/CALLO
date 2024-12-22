"use client";

import { useState } from "react";
import useAuth from "@/hooks/auth/useAuth";
import { Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignUp } = useAuth();

  // 로그인 처리 함수
  const signUp = async (e: React.FormEvent) => {
    e.preventDefault();
    handleSignUp({ email, password });
  };

  return (
    <Container>
      <ImgWrap>
        <LogoImg src="/img/로고_배너_투명배경_메인컬러폰트_타이트.png" />
      </ImgWrap>
      <Form onSubmit={signUp}>
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
          <SignUpButton onClick={signUp} variant="contained" type="submit" disableElevation>
            회원가입
          </SignUpButton>
        </ButtonWrap>
      </Form>
    </Container>
  );
};

export default SignUp;

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

const SignUpButton = styled(Button)`
  width: 100%;
  height: 50px;
  font-size: 16px !important;
  background-color: var(--main-color) !important;
`;

"use client";

import { ReactNode } from "react";
import useAuth from "@/hooks/auth/useAuth";
import SignUpButton from "./SignUpButton";

type SignUpFormProps = {
  email: string;
  password: string;
  children: ReactNode; // children은 ReactNode 타입으로 정의
};

const SignUpForm = ({ email, password, children }: SignUpFormProps) => {
  const { handleSignUp } = useAuth();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // 기본 동작(새로고침) 방지
        handleSignUp({ email, password });
      }}
    >
      {children}
      <SignUpButton
        onClick={() => {
          handleSignUp({ email, password });
        }}
      />
    </form>
  );
};

export default SignUpForm;

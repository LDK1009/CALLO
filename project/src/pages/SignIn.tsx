"use client";

import { useState } from "react";
import useAuth from "@/hooks/auth/useAuth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignIn } = useAuth();

  // 로그인 처리 함수
  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    handleSignIn({ email, password });
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={signIn}>
        <label>이메일</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="example@email.com"
        />

        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="비밀번호 입력"
        />

        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

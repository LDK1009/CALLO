import Input from "@/components/common/Input";

import React, { useState } from "react";
import SignUpForm from "./SignUpForm";

const FormContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>회원가입</h2>
      <SignUpForm email={email} password={password}>
        <Input
          label="이메일"
          type="email"
          required={true}
          placeholder="example@naver.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="비밀번호"
          type="password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </SignUpForm>
    </div>
  );
};

export default FormContainer;

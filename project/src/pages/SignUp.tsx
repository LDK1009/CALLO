"use client";

import FormContainer from "@/components/signUp/container/FormContainer";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Conatainer>
      회원가입 페이지
      <FormContainer />
    </Conatainer>
  );
};

export default SignUp;

const Conatainer = styled.div`
  padding-top: 50px;
`;

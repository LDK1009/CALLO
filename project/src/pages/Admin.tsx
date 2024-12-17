"use client";
import Dashboard from "@/components/admin/Dashboard";
import SignIn from "@/components/admin/SignIn";
import { useState } from "react";
import styled from "styled-components";

const Admin = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  return <Conatainer>{isSignIn ? <Dashboard /> : <SignIn setIsSignIn={setIsSignIn} />}</Conatainer>;
};

export default Admin;

const Conatainer = styled.div`
  padding-top: 50px;
`;

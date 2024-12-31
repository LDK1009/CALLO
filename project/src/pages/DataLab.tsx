"use client";

import { useAuthStore } from "@/store";
import SignIn from "./SignIn";
import DataLabPageContainer from "@/components/data-lab/DataLabPageContainer";

const DataLab = () => {
  const { isLogin } = useAuthStore();

  return isLogin ? <DataLabPageContainer /> : <SignIn />;
};

export default DataLab;

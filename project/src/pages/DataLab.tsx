"use client";

import Controller from "@/components/data-lab/Controller";
import DataLabProductList from "@/components/data-lab/DataLabProductList";
import LabButton from "@/components/data-lab/LabButton";
import { useAuthStore } from "@/store";
import SignIn from "./SignIn";

const DataLab = () => {
  const { isLogin } = useAuthStore();

  return isLogin ? (
    <div>
      <Controller />
      <DataLabProductList />
      <LabButton />
    </div>
  ) : (
    <SignIn />
  );
};

export default DataLab;

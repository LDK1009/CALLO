"use client";

import { useAuthStore } from "@/store";
import DataLabPageContainer from "@/components/data-lab/DataLabPageContainer";
import Preview from "@/components/data-lab/Preview";

const DataLab = () => {
  const { isLogin } = useAuthStore();

  return isLogin ? <DataLabPageContainer /> : <Preview />;
};

export default DataLab;

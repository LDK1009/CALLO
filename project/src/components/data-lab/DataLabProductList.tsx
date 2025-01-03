"use client";

import styled from "styled-components";
import DataLabProduct from "./DataLabProduct";
import { useEffect } from "react";
import useDataLab from "@/hooks/data-lab/useDataLab";
import { useDataLabStore } from "@/store";

const DataLabProductList = () => {
  const {dataFetch} = useDataLab();
  const {items} = useDataLabStore();

  useEffect(() => {
    dataFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RenderCartProducts = items?.map((el, idx) => {
    return <DataLabProduct key={idx} info={el} index={idx}/>;
  });

  return <Container>{RenderCartProducts}</Container>;
};

export default DataLabProductList;

const Container = styled.div`
  width: 100%;
  height: 548px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 0px 16px;
  overflow-y: auto;
  /* 스크롤바 제거 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

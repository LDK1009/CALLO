"use client";

import { useDataLabResultStore } from "@/store";
import { useEffect } from "react";
import styled from "styled-components";
import ResultItem from "./ResultItem";

const ResultContainer = () => {
  const { items, setIsOpen } = useDataLabResultStore();

  useEffect(() => {
    console.log(items);
  }, [items]);

  const RenderItems = items?.map((el, idx) => {
    return <ResultItem key={idx} info={el} />;
  });
  return (
    <Container>
      결과 페이지
      <button
        onClick={() => {
          setIsOpen(false);
        }}
      >
        닫기
      </button>
      {RenderItems}
    </Container>
  );
};

export default ResultContainer;

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
`;

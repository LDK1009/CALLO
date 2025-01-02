"use client";

import { useDataLabResultStore } from "@/store";
import styled from "styled-components";
import ResultItem from "./ResultItem";
import ResultSortSelect from "./ResultSortSelect";

const ResultContainer = () => {
  const { items, setIsOpen } = useDataLabResultStore();

  const RenderItems = items?.map((el, idx) => {
    return <ResultItem key={idx} info={el} />;
  });

  return (
    <Container>
      <button
        onClick={() => {
          setIsOpen(false);
        }}
      >
        닫기
      </button>
      <ResultSortSelect />
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

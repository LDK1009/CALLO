"use client";

import { useDataLabResultStore } from "@/store";
import styled from "styled-components";
import ResultItem from "./ResultItem";
import ResultSortSelect from "./ResultSortSelect";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const ResultContainer = () => {
  const { items, setIsOpen } = useDataLabResultStore();

  const RenderItems = items?.map((el, idx) => {
    return <ResultItem key={idx} info={el} />;
  });

  return (
    <Container>
      <CancleIcon
        onClick={() => {
          setIsOpen(false);
        }}
      />
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
`;

const CancleIcon = styled(CloseOutlinedIcon)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

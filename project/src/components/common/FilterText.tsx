"use client";

import { useProductStore } from "@/store";
import styled from "styled-components";

const FilterText = () => {
  const { majorCategory, middleCategory, searchString } = useProductStore();
  return (
    <Container>
      {majorCategory} / {middleCategory} / {searchString}{" "}
    </Container>
  );
};

export default FilterText;

const Container = styled.div`
  font-size: 10px;
  color: var(--gray);
`;

"use client";

import styled from "styled-components";

type PropsType = {
  text: string;
  isSelect: boolean;
};
const CategoryItem = ({ text, isSelect }: PropsType) => {
  return <Container $isSelect={isSelect}>{text}</Container>;
};

export default CategoryItem;

type ContainerType = {
  $isSelect: boolean;
};

const Container = styled.div<ContainerType>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-bottom: 2px solid ${(props) => (props.$isSelect ? "black" : "var(--gray)")};
  font-size: 16px;
  font-weight: bold;
`;

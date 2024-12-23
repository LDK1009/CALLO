"use client";

import styled from "styled-components";

type PropsType = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  text: string;
  isSelect: boolean;
};

const CategoryItem = ({ onClick, text, isSelect }: PropsType) => {
  return (
    <Container onClick={onClick} $isSelect={isSelect}>
      {text}
    </Container>
  );
};

export default CategoryItem;

type ContainerType = {
  $isSelect: boolean;
};

const Container = styled.div<ContainerType>`
  flex-shrink: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-bottom: 2px solid ${(props) => (props.$isSelect ? "var(--main-color)" : "var(--gray)")};
  font-size: 16px;
  font-weight: bold;
`;

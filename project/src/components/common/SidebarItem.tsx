"use client";

import { useProductStore } from "@/store";
import { useSidebarStore } from "@/store/sidebarStore";
import styled from "styled-components";

type PropsType = {
  index : number;
  text: string;
  isSelect: boolean;
  query: string;
};

const SidebarItem = ({ index, text, isSelect, query }: PropsType) => {
  const setMajorCategory = useProductStore((state) => state.setMajorCategory);
  const setItem = useSidebarStore((state)=> state.setItem);

  function handleClick() {
    setMajorCategory(query);
    setItem(index);
  }

  return (
    <Container onClick={handleClick} $isSelect={isSelect}>
      {text}
    </Container>
  );
};

export default SidebarItem;

////////////////////////////// 스타일드 컴포넌트

type ContainerType = {
  $isSelect: boolean;
};

const Container = styled.div<ContainerType>`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 12px;
  font-size: 16px;
  background-color: ${({ $isSelect }) => ($isSelect === true ? "white" : "#F6F7F9")};
  color: ${({ $isSelect }) => ($isSelect === true ? "var(--black)" : "var(--gray)")};
`;

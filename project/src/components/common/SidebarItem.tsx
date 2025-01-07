"use client";

import { useProductStore } from "@/store";
import { useSidebarStore } from "@/store/sidebarStore";
import { useRouter } from "next/navigation";
import styled from "styled-components";

type PropsType = {
  index: number;
  text: string;
  isSelect: boolean;
  query: string;
  type: string;
};

const SidebarItem = ({ index, text, isSelect, query, type }: PropsType) => {
  const {setMajorCategory, setMiddleCategory} = useProductStore(); 
  const { setItem, setItem2, close, secondOpen } = useSidebarStore();
  const router = useRouter();

  function majorHandleClick() {
    setMajorCategory(query);
    setItem(index);
    secondOpen();
  }

  function middleHandleClick() {
    setMiddleCategory(query);
    setItem2(index);
    router.push("/main");
    close();
  }

  return (
    <Container onClick={type === "major" ? majorHandleClick : middleHandleClick} $isSelect={isSelect}>
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
  font-weight: ${({ $isSelect }) => ($isSelect === true ? "bold" : "normal")};
  background-color: ${({ $isSelect }) => ($isSelect === true ? "white" : "#F6F7F9")};
  color: ${({ $isSelect }) => ($isSelect === true ? "var(--black)" : "var(--gray)")};
`;

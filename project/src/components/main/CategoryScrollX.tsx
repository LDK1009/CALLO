"use client";

import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store";

const CategoryScrollX = () => {
  const [categories, setCategories] = useState([
    { text: "", isSelect: false },
    { text: "음료", isSelect: false },
    { text: "간식", isSelect: false },
    { text: "빵", isSelect: false },
    { text: "면", isSelect: false },
    { text: "아이스크림", isSelect: false },
    { text: "냉동", isSelect: false },
    { text: "통조림", isSelect: false },
    { text: "소스", isSelect: false },
    { text: "밥/죽", isSelect: false },
    { text: "도시락", isSelect: false },
    { text: "유제품", isSelect: false },
  ]);

  const middleCategory = useProductStore((state) => state.middleCategory);
  const setMiddleCategory = useProductStore((state) => state.setMiddleCategory);

  useEffect(() => {
    setCategories((prev) =>
      prev.map((category) =>
        category.text === middleCategory ? { ...category, isSelect: true } : { ...category, isSelect: false }
      )
    );
  }, [middleCategory]);

  const RenderCategories = categories.map((el, idx) => {
    return (
      <CategoryItem
        onClick={() => {
          setMiddleCategory(el.text);
        }}
        key={idx}
        text={el.text}
        isSelect={el.isSelect}
      />
    );
  });
  return <Container>{RenderCategories}</Container>;
};

export default CategoryScrollX;

const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 0px 8px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  column-gap: 12px;

  overflow-x: scroll;
  scroll-behavior: smooth;

  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

"use client";

import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store";

const CategoryScrollX = () => {
  const [categories, setCategories] = useState([
    { text: "전체", query: "", isSelect: false },
    { text: "음료", query: "beverage", isSelect: false },
    { text: "간식", query: "snack", isSelect: false },
    { text: "빵", query: "bread", isSelect: false },
    { text: "면", query: "noodle", isSelect: false },
    { text: "아이스크림", query: "ice_cream", isSelect: false },
    { text: "냉동", query: "frozen", isSelect: false },
    { text: "통조림", query: "canned", isSelect: false },
    { text: "소스", query: "sauce", isSelect: false },
    { text: "밥/죽", query: "rice_porridge", isSelect: false },
    { text: "도시락", query: "lunch_box", isSelect: false },
    { text: "유제품", query: "dairy", isSelect: false },
  ]);

  const middleCategory = useProductStore((state) => state.middleCategory);
  const setMiddleCategory = useProductStore((state) => state.setMiddleCategory);

  useEffect(() => {
    setCategories((prev) =>
      prev.map((el) => (el.query === middleCategory ? { ...el, isSelect: true } : { ...el, isSelect: false }))
    );

  }, [middleCategory]);

  const RenderCategories = categories.map((el, idx) => {
    return (
      <CategoryItem
        onClick={() => {
          setMiddleCategory(el.query);
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

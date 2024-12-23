"use client";

import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const CategoryScrollX = () => {
  const categories = [
    "전체",
    "음료",
    "간식",
    "빵",
    "면",
    "아이스크림",
    "냉동",
    "통조림",
    "소스",
    "밥/죽",
    "도시락",
    "유제품",
  ];

  const RenderCategories = categories.map((el, idx) => {
    return <CategoryItem key={idx} text={el} isSelect={false}/>;
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

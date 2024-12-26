import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const CategoryScroll = () => {
  const ItemList = [
    { src: "/gif/음료.gif", label: "음료", query: "beverage" },
    { src: "/gif/간식.gif", label: "간식", query: "snack" },
    { src: "/gif/빵.gif", label: "빵", query: "bread" },
    { src: "/gif/면.gif", label: "면", query: "noodle" },
    { src: "/gif/아이스크림.gif", label: "아이스크림", query: "ice_cream" },
    { src: "/gif/냉동.gif", label: "냉동", query: "frozen" },
    { src: "/gif/통조림.gif", label: "통조림", query: "canned" },
    { src: "/gif/소스.gif", label: "소스", query: "sauce" },
    { src: "/gif/밥.gif", label: "밥/죽", query: "rice_porridge" },
    { src: "/gif/도시락.gif", label: "도시락", query: "lunch_box" },
    { src: "/gif/유제품.gif", label: "유제품", query: "dairy" },
  ];

  const RenderItemList = ItemList.map((el, idx) => {
    return <CategoryItem key={idx} src={el.src} label={el.label} query={el.query} />;
  });
  return <Container>{RenderItemList}</Container>;
};

export default CategoryScroll;

const Container = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;

  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

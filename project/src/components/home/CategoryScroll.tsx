import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const CategoryScroll = () => {
  const ItemList = [
    { src: "/gif/beverage.gif", label: "음료", query: "beverage" },
    { src: "/gif/snack.gif", label: "간식", query: "snack" },
    { src: "/gif/bread.gif", label: "빵", query: "bread" },
    { src: "/gif/noodle.gif", label: "면", query: "noodle" },
    { src: "/gif/icecream.gif", label: "아이스크림", query: "icecream" },
    { src: "/gif/frozen.gif", label: "냉동", query: "frozen" },
    { src: "/gif/canned.gif", label: "통조림", query: "canned" },
    { src: "/gif/sauce.gif", label: "소스", query: "sauce" },
    { src: "/gif/rice-porridge.gif", label: "밥/죽", query: "rice_porridge" },
    { src: "/gif/lunch-box.gif", label: "도시락", query: "lunch_box" },
    { src: "/gif/dairy.gif", label: "유제품", query: "dairy" },
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

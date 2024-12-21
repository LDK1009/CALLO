import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const CategoryScroll = () => {
  const ItemList = [
    { src: "/gif/음료.gif", label: "음료" },
    { src: "/gif/간식.gif", label: "간식" },
    { src: "/gif/빵.gif", label: "빵" },
    { src: "/gif/면.gif", label: "면" },
    { src: "/gif/아이스크림.gif", label: "아이스크림" },
    { src: "/gif/냉동.gif", label: "냉동" },
    { src: "/gif/통조림.gif", label: "통조림" },
    { src: "/gif/소스.gif", label: "소스" },
    { src: "/gif/밥.gif", label: "밥" },
    { src: "/gif/도시락.gif", label: "도시락" },
    { src: "/gif/유제품.gif", label: "유제품" },
  ];

  const RenderItemList = ItemList.map((el, idx) => {
    return <CategoryItem key={idx} src={el.src} label={el.label} />;
  });
  return <Container>{RenderItemList}</Container>;
};

export default CategoryScroll;

const Container = styled.div`
  width: 100%;
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

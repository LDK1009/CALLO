import { ProductWithId } from "@/types/models/product.type";
import styled from "styled-components";

const Item = ({ data }: { data: ProductWithId }) => {
  const { name, link, src, major_category, middle_category, price, piece, price_per_piece, nutritional } = data;
  const { calories, carbohydrate, protein, fat } = nutritional;
  return (
    <Container href={link} target="_blank" rel="noopener noreferrer">
      <Top>
        <Img src={src} alt="" />
        <div>상품명 : {name}</div>
        <div>
          {major_category} / {middle_category}
        </div>
        <div>
          가격 : {price} 원 / 개수 : {piece}
        </div>
        <div>개당 가격 : {price_per_piece}</div>
      </Top>
      <Bottom>
        <div>칼로리 : {calories}</div>
        <div>탄수화물 : {carbohydrate}</div>
        <div>단백질 : {protein}</div>
        <div>지방 : {fat}</div>
      </Bottom>
    </Container>
  );
};

export default Item;

const Container = styled.a`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 200px;
  height: 400px;
  border: 3px solid #26539c;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%; /* 원하는 너비 */
  height: auto;
`;

const Top = styled.div`
  background-color: lightblue;
  flex: 1 1 50%; /* 기본 크기는 콘텐츠에 따라, 여유 공간 비율로 확장 */
`;

const Bottom = styled.div`
  background-color: yellow;
  flex: 1 1 50%; /* 기본 크기는 콘텐츠에 따라, 여유 공간 비율로 확장 */
`;

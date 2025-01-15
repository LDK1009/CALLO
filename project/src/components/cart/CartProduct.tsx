"use client";

import { useCartStore } from "@/store";
import { CartItemType } from "@/types/store/cart.type";
import { Checkbox } from "@mui/material";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import ImgNutritionSwiper from "../common/ImgNutritionSwiper";

type PropsType = { info: CartItemType; index: number };

const CartProduct = ({ info, index }: PropsType) => {
  const { items, setItems } = useCartStore();

  function checkBoxChange(i: number) {
    const nextItems = items?.map((el, elIdx) => {
      return i === elIdx ? { ...el, isSelect: !el.isSelect } : el;
    });
    setItems(nextItems);
  }

  const formatNumber = (value: number): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const router = useRouter();

  return (
    <Container onClick={() => router.push(info.link)}>
      <ImgNutritionSwiper size={100} fontSize="body2" src={info.src} nutritional={info.nutritional} />
      <TextWrap>
        <Name>{info.name}</Name>
        <PriceWrap>
          <TotalPrice>{formatNumber(info.price)}원</TotalPrice>
          <PiecePriceWrap>
            <PieceUnit>1개당</PieceUnit>
            <PricePerPiece>{formatNumber(info.price_per_piece)}원</PricePerPiece>
          </PiecePriceWrap>
        </PriceWrap>
      </TextWrap>
      <CheckBox
        checked={info.isSelect}
        onClick={(e) => e.stopPropagation()} // 클릭 이벤트 전파 방지
        onChange={() => {
          checkBoxChange(index);
        }}
      />
    </Container>
  );
};

export default CartProduct;

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextWrap = styled.div`
  width: 160px;
  height: 100%;
  padding: 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Name = styled.div`
  font-size: 16px;
  align-self: flex-start;
  display: -webkit-box; /* 플렉스 박스처럼 동작 */
  -webkit-box-orient: vertical; /* 수직 방향으로 텍스트 정렬 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  -webkit-line-clamp: 2; /* 최대 2줄까지만 표시 */
  text-overflow: ellipsis; /* 잘린 텍스트 뒤에 '...' 추가 */
`;

const PriceWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TotalPrice = styled.div`
  font-size: 16px;
`;

const PiecePriceWrap = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: end;
`;

const PieceUnit = styled.div`
  font-size: 8px;
  color: var(--gray);
`;

const PricePerPiece = styled.div`
  font-size: 12px;
  color: var(--gray);
`;

const CheckBox = styled(Checkbox)`
  padding: 0px !important;
  & > .MuiSvgIcon-root {
    color: var(--main-color);
  }
`;

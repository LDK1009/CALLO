"use client";

import { useCartStore } from "@/store";
import { CartItemType } from "@/types/store/cart.type";
import { Checkbox, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import styled, { keyframes } from "styled-components";

type PropsType = { info: CartItemType; index: number };

const CartProduct = ({ info, index }: PropsType) => {
  const {items, setItems} = useCartStore();

  function checkBoxChange(i : number){
    const nextItems = items?.map((el, elIdx)=>{
      return i === elIdx ? {...el, isSelect : !el.isSelect} : el
    });
    setItems(nextItems);
  }
  
  const formatNumber = (value: number): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const { nutritional } = info;

  const router = useRouter();

  return (
    <Container>
      <ImgNutritionalWrap onClick={() => router.push(info.link)}>
        <ScrollAnimationBall />
        <Img src={info.src} alt="" />
        <Nutritional>
          <TypographyWrap>
            <Typography variant="body1">칼로리 : {nutritional.calories}</Typography>
            <Typography variant="body1">탄수화물 : {nutritional.carbohydrate}</Typography>
            <Typography variant="body1">단백질 : {nutritional.protein}</Typography>
            <Typography variant="body1">지방 : {nutritional.fat}</Typography>
          </TypographyWrap>
        </Nutritional>
      </ImgNutritionalWrap>
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
      <CheckBox checked={info.isSelect} onChange={() => {checkBoxChange(index)}} />
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

const ImgNutritionalWrap = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  position: relative;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  /* 스크롤바 제거 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

const scrollBallAnimation = keyframes`
  0% {
    opacity: 0;
    transform:translateX(0px);
  }
  50% {
    opacity: 1;
    transform:translateX(0px);
  }
  100% {
    opacity: 1;
    transform:translateX(-40px);
  }
`;

const ScrollAnimationBall = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  opacity: 0;
  bottom: 12px;
  right: 12px;
  border-radius: 100%;
  background-color: var(--gray);
  animation: ${scrollBallAnimation} 2.5s ease-in-out 2;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  scroll-snap-align: start;
`;

const Nutritional = styled.div`
  width: 100%;
  height: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
`;

const TypographyWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & > p {
    font-weight: bold;
  }
`;

// const Img = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 12px;
// `;

const TextWrap = styled.div`
  width: 160px;
  height: 100%;
  padding: 16px 0px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

const Name = styled.div`
  font-size: 16px;
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

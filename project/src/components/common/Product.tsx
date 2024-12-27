"use client";

import useCarts from "@/hooks/cart/useCarts";
import { useAuthStore } from "@/store";
import { ProductType } from "@/types/store/product.type";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

const Product = ({ info }: { info: ProductType }) => {
  const { handlePostCarts } = useCarts();
  const { uid } = useAuthStore();

  function shopingIconClick(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    e.preventDefault(); // 기본 동작 중단 (리다이렉션 방지)
    console.log(info.id);
    handlePostCarts({
      product_id: info.id,
      user_id: uid,
    });
  }

  // 숫자 포맷팅
  const formatNumber = (value: number): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // 영양소 데이터 비구조화 할당
  const { nutritional } = info;

  return (
    <Link href={info.link} target="_blank" rel="noopener noreferrer">
      <Container>
        <ImgNutritionalWrap>
          <ScrollAnimationBall />
          <Img src={info.src} alt="" />
          <Nutritional>
            <TypographyWrap>
              <Typography variant="body1">탄수화물 : {nutritional.carbohydrate}</Typography>
              <Typography variant="body1">단백질 : {nutritional.protein}</Typography>
              <Typography variant="body1">지방 : {nutritional.fat}</Typography>
              <Typography variant="body1">칼로리 : {nutritional.calories}</Typography>
            </TypographyWrap>
          </Nutritional>
        </ImgNutritionalWrap>
        <HeadTextWrap>
          <Typography variant="body1">BEST</Typography>
          <ShoppingIcon onClick={(e) => shopingIconClick(e)} />
        </HeadTextWrap>
        <Name variant="body1">{info.name}</Name>
        <PriceWrap>
          <TotalPrice>{formatNumber(info.price)}원</TotalPrice>
          <PricePrePieceWrap>
            <PieceText>1개당</PieceText>
            <PricePerPiece>{formatNumber(info.price_per_piece)}원</PricePerPiece>
          </PricePrePieceWrap>
        </PriceWrap>
      </Container>
    </Link>
  );
};

export default Product;

const Container = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  align-items: center;
`;

const ImgNutritionalWrap = styled.div`
  width: 100%;
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

const HeadTextWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const ShoppingIcon = styled(ShoppingBagOutlined)`
  width: 19px;
  height: 19px;
`;

const Name = styled(Typography)`
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
  align-items: flex-end;
  justify-content: space-between;
`;

const TotalPrice = styled.div`
  font-size: 16px;
  line-height: 1;
`;

const PricePrePieceWrap = styled.div`
  display: flex;
  align-items: flex-end; /* 하단 정렬 */
  gap: 4px;
  color: var(--gray);
  line-height: 20px;
`;

const PieceText = styled.div`
  font-size: 8px;
  line-height: 1; /* 텍스트 상하 간격 제거 */
`;

const PricePerPiece = styled.div`
  font-size: 12px;
  line-height: 1; /* 텍스트 상하 간격 제거 */
`;

"use client";

import { ProductType } from "@/types/store/product.type";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

const Product = ({ info }: { info: ProductType }) => {
  const formatNumber = (value: number): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <Link href={info.link} target="_blank" rel="noopener noreferrer">
      <Container>
        <Img src={info.src} alt="" />
        <HeadTextWrap>
          <Typography variant="body1">BEST</Typography>
          <ShoppingIcon />
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

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
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

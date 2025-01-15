"use client";

import useCarts from "@/hooks/cart/useCarts";
import { useAuthStore } from "@/store";
import { ProductType } from "@/types/store/product.type";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";
import SEO from "./SEO";
import useProducts from "@/hooks/product/useProducts";
import ImgNutritionSwiper from "./ImgNutritionSwiper";

const Product = ({ info }: { info: ProductType }) => {
  // 커스텀훅
  const { hanleIncreaseView } = useProducts();
  const { handlePostCarts } = useCarts();

  // 상태
  const { uid } = useAuthStore();

  // 함수
  function shopingIconClick(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    e.preventDefault(); // 기본 동작 중단 (리다이렉션 방지)

    handlePostCarts({
      product_id: info.id,
      user_id: uid,
    });
  }

  // 숫자 포맷팅
  const formatNumber = (value: number): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const productSEO = {
    title: "CALLO - " + info.name,
    description: info.nutritional.calories + "상품 발견! 놓치지말고 구매하세요!",
    keywords: "제로 칼로리, 제로 슈가, 로우 칼로리, 로우 슈가, 저당, 저칼로리, 제로 식단, 식단, 음료, 다이어트",
    url: "https://www.callo.store/main",
    image: info.src,
  };

  // 링크 클릭 시 조회수 증가
  const onLinkClick = () => {
    if (info && info.id) {
      hanleIncreaseView(info.id);
    }
  };

  return (
    <>
      <SEO {...productSEO} />
      <Link href={info.link} onClick={onLinkClick} target="_blank" rel="noopener noreferrer">
        <Container>
          <ImgNutritionSwiper size={160} fontSize="body1" src={info.src} nutritional={info.nutritional} />
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
    </>
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

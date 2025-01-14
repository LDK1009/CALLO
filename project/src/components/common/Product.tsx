"use client";

import useCarts from "@/hooks/cart/useCarts";
import { useAuthStore } from "@/store";
import { ProductType } from "@/types/store/product.type";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import SEO from "./SEO";
import useProducts from "@/hooks/product/useProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper/types"; // Import Swiper type

const Product = ({ info }: { info: ProductType }) => {
  // 커스텀훅
  const { hanleIncreaseView } = useProducts();
  const { handlePostCarts } = useCarts();

  // 상태
  const { uid } = useAuthStore();
  const swiperRef = useRef<SwiperType | null>(null); // Type the ref properly

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

  // 영양소 데이터 비구조화 할당
  const { nutritional } = info;

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

  const [, setSlideChangeCount] = useState(0);
  const MAX_AUTOPLAY_COUNT = 2; // 최대 자동 재생 횟수

  const onAutoPlay = () => {
    setSlideChangeCount((prevCount) => {
      const newCount = prevCount + 1;

      if (newCount >= MAX_AUTOPLAY_COUNT) {
        swiperRef.current?.autoplay.stop(); // 자동 재생 중단
        console.log("자동 재생이 중단되었습니다.");
      }

      return newCount;
    });
  };

  return (
    <>
      <SEO {...productSEO} />
      <Link href={info.link} onClick={onLinkClick} target="_blank" rel="noopener noreferrer">
        <Container>
          <ImgAndNutritional
            onSwiper={(swiper) => {
              swiperRef.current = swiper;

              swiper.on("autoplay", () => {
                console.log("Autoplay 진행 중");
                onAutoPlay();
              });
            }}
            spaceBetween={0} // 슬라이드 간격
            slidesPerView={1} // 한 번에 보여줄 슬라이드 수
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
            }}
            loop={true}
          >
            <SwiperSlide>
              <Img src={info.src} alt="" />
              <ScrollAnimationBall />
            </SwiperSlide>
            <SwiperSlide>
              <Nutritional>
                <TypographyWrap>
                  <Typography variant="body1">칼로리 : {nutritional.calories}</Typography>
                  <Typography variant="body1">탄수화물 : {nutritional.carbohydrate}</Typography>
                  <Typography variant="body1">단백질 : {nutritional.protein}</Typography>
                  <Typography variant="body1">지방 : {nutritional.fat}</Typography>
                </TypographyWrap>
              </Nutritional>
            </SwiperSlide>
          </ImgAndNutritional>
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

const ImgAndNutritional = styled(Swiper)`
  width: 160px;
  height: 160px;
  border-radius: 12px;
  border: 1px solid #dddddd;
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
  height: 100%;
  position: relative !important;
`;

const Nutritional = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

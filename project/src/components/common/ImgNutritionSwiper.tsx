"use client";

import { Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";

type PropsType = {
  size: number;
  fontSize: "body1" | "body2";
  src: string;
  nutritional: {
    calories: number;
    carbohydrate: number;
    protein: number;
    fat: number;
  };
};

const ImgNutritionSwiper = ({ size, fontSize, src, nutritional }: PropsType) => {
  const swiperRef = useRef<SwiperType | null>(null); // Type the ref properly

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
    <Container $size={size}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;

          swiper.on("autoplay", () => {
            console.log("Autoplay 진행 중");
            onAutoPlay();
          });
        }}
        spaceBetween={1} // 슬라이드 간격
        slidesPerView={1} // 한 번에 보여줄 슬라이드 수
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
        }}
        loop={true}
      >
        <SwiperSlide>
          <Img src={src} alt="productImage" width={size} height={size} />
          <ScrollAnimationBall />
        </SwiperSlide>
        <SwiperSlide>
          <Nutritional $size={size}>
            <TypographyWrap>
              <Typography variant={fontSize}>칼로리 : {nutritional.calories}</Typography>
              <Typography variant={fontSize}>탄수화물 : {nutritional.carbohydrate}</Typography>
              <Typography variant={fontSize}>단백질 : {nutritional.protein}</Typography>
              <Typography variant={fontSize}>지방 : {nutritional.fat}</Typography>
            </TypographyWrap>
          </Nutritional>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default ImgNutritionSwiper;

type ContainerType = {
  $size: number;
};
const Container = styled.div<ContainerType>`
  width: ${(props) => `${props.$size}px`};
  height: ${(props) => `${props.$size}px`};
  border-radius: 12px;
  border: 1px solid #dddddd;
  overflow: hidden;
`;

const Img = styled.img`
  position: relative;
`;

type NutritionalType = {
  $size: number;
};
const Nutritional = styled.div<NutritionalType>`
  width: ${(props) => `${props.$size}px`};
  height: ${(props) => `${props.$size}px`};
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
  bottom: 20px;
  right: 12px;
  border-radius: 100%;
  background-color: var(--gray);
  animation: ${scrollBallAnimation} 2.5s ease-in-out 2;
`;

"use client";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Carousel = () => {
  return (
    <div>
      <Container
        spaceBetween={0} // 슬라이드 간격
        slidesPerView={1} // 한 번에 보여줄 슬라이드 수
        onSlideChange={() => console.log("Slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000, // 3초마다 전환
          disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 유지
        }}
      >
        <SwiperSlide>
          <img src="/배너1.png" width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/배너2.png" width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/배너3.png" width="100%" height="100%" />
        </SwiperSlide>
      </Container>
    </div>
  );
};

export default Carousel;

const Container = styled(Swiper)`
  height: 250px;
`;

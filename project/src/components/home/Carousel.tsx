"use client";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useProductStore } from "@/store";
import { useRouter } from "next/navigation";

const Carousel = () => {
  const { setMiddleCategory } = useProductStore();
  const router = useRouter();

  const slideArr = [
    {
      src: "/img/slide-banner-1.png",
      onClick: () => {
        setMiddleCategory("snack");
        router.push("/main");
      },
    },
    {
      src: "/img/slide-banner-2.png",
      onClick: () => {
        setMiddleCategory("bread");
        router.push("/main");
      },
    },
    {
      src: "/img/slide-banner-3.png",
      onClick: () => {
        setMiddleCategory("beverage");
        router.push("/main");
      },
    },
    {
      src: "/img/slide-banner-4.png",
      onClick: () => {
        window.open("https://dune-volleyball-962.notion.site/CALLO-171bebe7ec3b80b2ae9bfe0e1c5957d2", "_blank");
      },
    },
  ];

  const RenderSlideArr = slideArr.map((el, idx) => {
    return (
      <SwiperSlide key={idx} onClick={el.onClick}>
        <Image src={el.src} alt={`배너이미지 ${idx}`} fill />
      </SwiperSlide>
    );
  });

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
        {RenderSlideArr}
      </Container>
    </div>
  );
};

export default Carousel;

const Container = styled(Swiper)`
  height: 250px;
`;

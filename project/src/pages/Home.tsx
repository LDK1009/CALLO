"use client";

import Carousel from "@/components/home/Carousel";
import styled from "styled-components";

const Home = () => {
  return (
    <Conatainer>
      <Carousel />
    </Conatainer>
  );
};

export default Home;

const Conatainer = styled.div`
  padding-top: 50px;
`;

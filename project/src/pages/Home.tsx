"use client";

import Carousel from "@/components/home/Carousel";
import MenuBlock from "@/components/home/MenuBlock";
import styled from "styled-components";

const Home = () => {
  return (
    <Conatainer>
      <Carousel />
      <MenuBlock/>
    </Conatainer>
  );
};

export default Home;

const Conatainer = styled.div`
  padding-top: 50px;
`;

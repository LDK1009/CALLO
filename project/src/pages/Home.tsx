"use client";

import Carousel from "@/components/home/Carousel";
import MenuBlock from "@/components/home/MenuBlock";
import PopularProduct from "@/components/home/PopularProduct";
import PopularSearches from "@/components/home/PopularSearches";
import SearchBar from "@/components/home/SearchBar";
import styled from "styled-components";

const Home = () => {
  return (
    <Conatainer>
      <Carousel />
      <MenuBlock />
      <SearchBar />
      <PopularSearches />
      <PopularProduct />
    </Conatainer>
  );
};

export default Home;

const Conatainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 50px;
`;

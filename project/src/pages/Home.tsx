"use client";

import Carousel from "@/components/home/Carousel";
import MenuBlock from "@/components/home/MenuBlock";
import PopularSearches from "@/components/home/PopularSearches";
import SearchBar from "@/components/home/SearchBar";
import styled from "styled-components";

const Home = () => {
  return (
    <Conatainer>
      <Carousel />
      <MenuBlock />
      <SearchBar />
      <PopularSearches/>
    </Conatainer>
  );
};

export default Home;

const Conatainer = styled.div`
  padding-top: 50px;
`;

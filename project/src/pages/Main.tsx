"use client";

import ItemContainer from "@/components/main/ItemContainer";
import styled from "styled-components";

const Main = () => {
  return (
    <Conatainer>
      <ItemContainer />
    </Conatainer>
  );
};

export default Main;

const Conatainer = styled.div`
  padding-top: 50px;
`;

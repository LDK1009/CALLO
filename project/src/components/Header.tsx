"use client";

import styled from "styled-components";

const Header = () => {
  return <Container>CALLO</Container>;
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0px;
  border-bottom:2px solid lightgray;
  backdrop-filter: blur(10px); /* 블러 효과 */
  font-size: var(--middle-title-font-size);
  font-weight:bold;

  & > div > svg {
    width: 30px !important;
    height: 30px !important;
    color: var(--main-color);
  }
`;

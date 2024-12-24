"use client";

import { PentagonOutlined } from "@mui/icons-material";
import Link from "next/link";
import styled from "styled-components";

const DataLabAndCart = () => {
  return (
    <Container>
      <GotoButton href="/data-lab">
        <IconBox>
          <PentagonOutlined />
        </IconBox>
        <Text>데이터랩</Text>
      </GotoButton>
      <GotoButton href="/cart">
        <IconBox>
          <PentagonOutlined />
        </IconBox>
        <Text>장바구니</Text>
      </GotoButton>
    </Container>
  );
};

export default DataLabAndCart;

const Container = styled.div`
  width: 375px;
  height: 200px;
  padding: 16px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GotoButton = styled(Link)`
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 4px 4px 16px 0px rgba(244, 224, 175, 0.8);
`;

const IconBox = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    width: 100px;
    height: 100px;
    color: var(--main-color);
  }
`;

const Text = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

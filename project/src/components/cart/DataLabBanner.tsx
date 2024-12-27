"use client";

import { PentagonOutlined } from "@mui/icons-material";
import styled from "styled-components";

const DataLabBanner = () => {
  return (
    <Container>
      <Banner>
        <Icon />
        <Text>
          데이터랩으로
          <br />
          영양성분 비교하기
        </Text>
      </Banner>
    </Container>
  );
};

export default DataLabBanner;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0px;
`;

const Banner = styled.div`
  width: 320px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
  background-color: var(--main-color);
  border-radius: 16px;
`;

const Icon = styled(PentagonOutlined)`
  width: 60px !important;
  height: 60px !important;
  color: white;
`;

const Text = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
  color: white;
`;

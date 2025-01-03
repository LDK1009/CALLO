"use client";

import styled from "styled-components";

const CoupangText = () => {
  return (
    <Container>{"이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다."}</Container>
  );
};

export default CoupangText;

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 16px;
  text-align: center;
  font-size: 8px;
  color: var(--gray);
`;

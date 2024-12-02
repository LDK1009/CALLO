"use client";

import styled from "styled-components";

const MenuBlock = () => {
  // 버튼 배열
  const ButtonArr = ["Cal", "Low", "Cal", "Low"];

  // 버튼 배열 렌더링
  const RenderButtonArr = ButtonArr.map((el, idx) => {
    return <Button key={idx}>{el}</Button>;
  });

  // 기울임 각도
  const inclination = 15;

  return (
    <>
      <Container>
        {/* 오른쪽 박스 */}
        <Right offset={inclination}>
          <InnerContainer>
            <RightLabelText offset={inclination}>Low</RightLabelText>
          </InnerContainer>
        </Right>
        {/* 왼쪽 박스 */}
        <Left offset={inclination}>
          <InnerContainer>
            <LeftLabelText>Zero</LeftLabelText>
          </InnerContainer>
        </Left>
        {/* 버튼 컨테이너 */}
        <ButtonConatiner>{RenderButtonArr}</ButtonConatiner>
      </Container>
    </>
  );
};

export default MenuBlock;

const Container = styled.div`
  width: 100%;
  height: 120px;
  position: relative;
  background-color: var(--third-color);
`;

interface OffsetProps {
  offset?: number;
}

const Left = styled.div<OffsetProps>`
  position: absolute;
  width: 55%;
  height: 100%;
  left: 0px;
  /* clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%); */
  clip-path: polygon(0% 0%, 100% 0%, ${(props) => `calc(100% - ${props.offset}%)`} 100%, 0% 100%);
  background-color: blue;
  background-color: var(--main-color);
`;

const Right = styled.div<OffsetProps>`
  position: absolute;
  width: 55%;
  height: 100%;
  right: 0px;
  /* clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%); */
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, ${(props) => `calc(${props.offset}%)`} 100%);
  background-color: blue;
  background-color: var(--third-color);
`;

const InnerContainer = styled.div`
  position: relative; /* 자식 요소의 기준 */
  width: 100%;
  height: 100%;
`;

const ButtonConatiner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid white;
`;

const RightLabelText = styled.div<OffsetProps>`
  position: absolute;
  left: ${(props) => `calc(5% + ${props.offset}%)`};
  font-size: var(--main-content-font-size);
`;

const LeftLabelText = styled(RightLabelText)`
  position: absolute;
  left: 5%;
  font-size: var(--main-content-font-size);
`;

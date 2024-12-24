"use client";

import styled from "styled-components";

type PropsType = {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
};

const Menu = ({ icon, text, onClick }: PropsType) => {
  return (
    <Container onClick={onClick}>
      {icon}
      <Text>{text}</Text>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 0px 16px;
  display: flex;
  column-gap: 8px;
  align-items: center;
  justify-content: start;
  border-bottom: 1px solid var(--light-gray);

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

const Text = styled.div`
  line-height: 24px;
  font-size: 16px;
`;

"use client";

import styled from "styled-components";

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default ContentContainer;

const Container = styled.div`
  padding:50px 0px;
`;

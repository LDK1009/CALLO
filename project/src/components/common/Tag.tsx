import styled from "styled-components";

const Tag = ({ text }: { text: string }) => {
  return <Container>{text}</Container>;
};

export default Tag;

const Container = styled.div`
  width: 60px;
  height: 20px;
  margin-right: 12px;
  background: linear-gradient(to right, var(--serve-color1), white);
  border-radius: 10px;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

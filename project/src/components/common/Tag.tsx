import styled from "styled-components";

const Tag = ({ text }: { text: string }) => {
  return <Container>{text}</Container>;
};

export default Tag;

const Container = styled.div`
  width: 60px;
  height: 20px;
  background: linear-gradient(to right, #2300eb, #ffdfea);
  border-radius: 10px;
  font-size: 8px;
  display:flex;
  align-items:center;
  justify-content:center;
`;
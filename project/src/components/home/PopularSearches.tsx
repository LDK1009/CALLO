import styled from "styled-components";
import Tag from "../common/Tag";
import SelectDropDown from "../common/SelectDropDown";

const PopularSearches = () => {
  return (
    <Container>
      <Box>
        <Tag text="인기 검색어" />
        <SelectDropDown />
      </Box>
    </Container>
  );
};

export default PopularSearches;

const Container = styled.div`
  width: 100%;
  height: 30px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

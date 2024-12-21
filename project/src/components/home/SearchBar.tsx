import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import Image from "next/image";

const SearchBar = () => {
  return (
    <Container>
      <StyledTextField
        id="outlined-basic"
        variant="outlined"
        slotProps={{
          input: {
            startAdornment: <Image src="/img/로고1.png" alt="example" width={30} height={30} />,
            endAdornment: <SerchIconCustom />,
          },
        }}
      />
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: center;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const SerchIconCustom = styled(SearchIcon)`
  color: var(--main-color);

  // 선분 스타일링
  & path {
    stroke: var(--main-color); /* 아이콘의 테두리 색 */
    stroke-width: 1px; /* 테두리 두께 */
  }
`;

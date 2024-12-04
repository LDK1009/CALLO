import { AccountCircle } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <>
      <Container
        id="outlined-basic"
        variant="outlined"
        slotProps={{
          input: {
            endAdornment: <SerchIconCustom />,
          },
        }}
      />
    </>
  );
};

export default SearchBar;

const Container = styled(TextField)`

`;

const SerchIconCustom = styled(SearchIcon)`
  color: var(--main-color);

  // 선분 스타일링
  & path {
    stroke: var(--main-color); /* 아이콘의 테두리 색 */
    stroke-width: 1px; /* 테두리 두께 */
  }
`;

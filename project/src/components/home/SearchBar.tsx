import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import Image from "next/image";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useProductStore } from "@/store";
import { patchSearchKeyword } from "@/services/search/searchService";

const SearchBar = () => {
  const { setSearchString } = useProductStore();
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");

  // 입력값 변화
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // 엔터키 다운
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchClick();
    }
  };

  // 아이콘 클릭 시 작동 함수
  const searchClick = () => {
    setSearchString(inputValue);
    router.push("/main");
    patchSearchKeyword(inputValue);
  };

  return (
    <Container>
      <StyledTextField
        id="outlined-basic"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // 엔터 키 이벤트 추가
        slotProps={{
          input: {
            startAdornment: <Image src="/img/logo-1.png" alt="example" width={30} height={30} />,
            endAdornment: <SerchIconCustom onClick={searchClick} />,
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
  color: var(--test);

  // 선분 스타일링
  & path {
    stroke: var(--test); /* 아이콘의 테두리 색 */
    stroke-width: 1px; /* 테두리 두께 */
  }
`;

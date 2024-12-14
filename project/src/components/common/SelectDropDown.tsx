import { FormControl, MenuItem, Select } from "@mui/material";
import styled from "styled-components";

const SelectDropDown = () => {
  const selectArr = [
    { text: "인기 검색어1", value: 10 },
    { text: "인기 검색어2", value: 20 },
    { text: "인기 검색어3", value: 30 },
    { text: "인기 검색어4", value: 40 },
    { text: "인기 검색어5", value: 50 },
    { text: "인기 검색어6", value: 60 },
    { text: "인기 검색어7", value: 70 },
    { text: "인기 검색어8", value: 80 },
    { text: "인기 검색어9", value: 90 },
    { text: "인기 검색어10", value: 100 },
  ];

  const selects = selectArr.map((el, idx) => {
    return (
      <MenuItem key={idx} value={el.value}>
        {el.text}
      </MenuItem>
    );
  });

  return (
    <StyledFormControl variant="standard">
      <Select value={10} onChange={() => {}} label="Age">
        {selects}
      </Select>
    </StyledFormControl>
  );
};

export default SelectDropDown;

const StyledFormControl = styled(FormControl)`
  width: 300px;
  & .MuiSelect-select{
    font-size:10px;
  }
`;

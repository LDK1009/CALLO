import { useModalStore } from "@/store";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SelectDropDown = () => {
  const selectArr = [
    { text: "라라스윗", value: 0 },
    { text: "빵", value: 1 },
    { text: "제로 콜라", value: 2 },
    { text: "아이스크림", value: 3 },
    { text: "라면", value: 4 },
    { text: "스테비아", value: 5 },
    { text: "곤약젤리", value: 6 },
    { text: "호떡", value: 7 },
    { text: "케이크", value: 8 },
    { text: "요거트", value: 9 },
  ];
  const [i, setI] = useState(0);

  const {open : modalOpen} = useModalStore();

  const selects = selectArr.map((el, idx) => {
    return (
      <MenuItem key={idx} value={el.value}>
        {el.text}
      </MenuItem>
    );
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prev) => (prev + 1) % 10);
    }, 2000);

    // 클린업 함수로 타이머 정리
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledFormControl variant="standard">
      <Select value={i} onChange={() => {
        modalOpen(
          {
            title:"Notice",
            content:"현재 준비중인 기능입니다!"
          }
        );
      }} label="Age">
        {selects}
      </Select>
    </StyledFormControl>
  );
};

export default SelectDropDown;

const StyledFormControl = styled(FormControl)`
  flex-grow: 1;

  & .MuiSelect-select {
    font-size: 10px;
  }
`;

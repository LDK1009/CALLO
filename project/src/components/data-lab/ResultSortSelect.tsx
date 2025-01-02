"use client";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
import useDataLab from "@/hooks/data-lab/useDataLab";
import { useDataLabResultStore } from "@/store";

const ResultSortSelect = () => {
  const { sort } = useDataLabResultStore();
  const { handleSort } = useDataLab();

  return (
    <StyledFormControl variant="standard">
      <StyledInputLabel>정렬</StyledInputLabel>
      <StyledSelect value={sort} onChange={(e) => handleSort(e.target.value)}>
        <MenuItem value="calories">칼로리</MenuItem>
        <MenuItem value="carbohydrate">탄수화물</MenuItem>
        <MenuItem value="protein">단백질</MenuItem>
        <MenuItem value="fat">지방</MenuItem>
      </StyledSelect>
    </StyledFormControl>
  );
};

export default ResultSortSelect;

const StyledFormControl = styled(FormControl)`
  width: 100%;
  margin-top: 16px !important;
`;

const StyledInputLabel = styled(InputLabel)`
  color: var(--main-color) !important;
`;

const StyledSelect = styled(Select)`
  &.MuiInputBase-root {
    border-bottom: 1px solid var(--main-color) !important; /* 기본 보더 색상 */
  }
  &.MuiInputBase-root::after {
    border-bottom: 2px solid var(--main-color) !important; /* 기본 보더 색상 */
  }
  & svg path {
    color: var(--main-color);
  }
`;

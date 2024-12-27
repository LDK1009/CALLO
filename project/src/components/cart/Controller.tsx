"use client";

import { DeleteOutlined } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const Controller = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container>
      <CheckBoxAndTextWrap>
        <CheckBox checked={checked} onChange={handleChange} inputProps={{ "aria-label": "controlled-checkbox" }} />
        <Text>전체 선택</Text>
      </CheckBoxAndTextWrap>
      <DeleteIcon onClick={()=>{}}/>
    </Container>
  );
};

export default Controller;

const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckBox = styled(Checkbox)`
  padding: 0px !important;
  & > .MuiSvgIcon-root {
    color: var(--main-color);
  }
`;
const Text = styled.div`
  font-size: 16px;
`;

const CheckBoxAndTextWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

const DeleteIcon = styled(DeleteOutlined)`
  color: var(--black);
`;

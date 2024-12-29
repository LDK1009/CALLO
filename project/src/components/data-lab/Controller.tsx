"use client";

import { useDataLabStore } from "@/store";
import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Controller = () => {
  const [checked, setChecked] = useState(false);
  const { items, setItems } = useDataLabStore();

  useEffect(() => {
    const nextItems = items?.map((el) => {
      return { ...el, isSelect: checked };
    });

    setItems(nextItems);
  }, [checked]);

  return (
    <Container>
      <CheckBoxAndTextWrap>
        <CheckBox
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
          inputProps={{ "aria-label": "controlled-checkbox" }}
        />
        <Text>전체 선택</Text>
      </CheckBoxAndTextWrap>
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

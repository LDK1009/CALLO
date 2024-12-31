"use client";

import { useDataLabResultStore, useDataLabStore } from "@/store";
import { PentagonOutlined } from "@mui/icons-material";
import styled from "styled-components";

const LabButton = () => {
  const {items} = useDataLabStore();
  const {setIsOpen, setItems : setResultItems} = useDataLabResultStore();

  // 선택된 아이템만 필터링
  function filterSelectedItems(){
    const returnItems = items?.filter((el)=>el.isSelect === true);
    return returnItems;
  }

  return (
    <Container>
      <CompareButton onClick={() => {
        const resultItems = filterSelectedItems();
        setResultItems(resultItems)
        setIsOpen(true);
      }}>
        <Icon />
        <Text>영양성분 비교</Text>
      </CompareButton>
    </Container>
  );
};

export default LabButton;

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CompareButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
  background-color: var(--main-color);
  border-radius: 16px;
`;

const Icon = styled(PentagonOutlined)`
  width: 50px !important;
  height: 50px !important;
  color: white;
`;

const Text = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
  color: white;
`;

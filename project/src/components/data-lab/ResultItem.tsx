"use client";

import { useDataLabResultStore } from "@/store";
import { DataLabItemType } from "@/types/store/dataLab.type";
import Link from "next/link";
import styled from "styled-components";

type PropsType = {
  info: DataLabItemType | undefined;
};
const ResultItem = ({ info }: PropsType) => {
  const { sort, unit } = useDataLabResultStore();

  return (
    <Link href={info?.link || ""} target="_blank" rel="noopener noreferrer">
      <Container>
        <ImgAndNameWrap>
          <Img src={info?.src} alt="" />
          <Name>{info?.name}</Name>
        </ImgAndNameWrap>
        <NutritionalAndUnitWrap>
          <Nutritional>{typeof sort === "string" && info?.nutritional[sort]}</Nutritional>
          <Unit>{unit}</Unit>
        </NutritionalAndUnitWrap>
      </Container>
    </Link>
  );
};

export default ResultItem;

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImgAndNameWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
`;

const Name = styled.div`
  width: 120px;
  height: auto;
  font-size: 16px;
`;

const NutritionalAndUnitWrap = styled.div`
  width: 100px;
  height: auto;
  padding: 1px 0px;
  display: flex;
  align-items: end;
  justify-content: end;
  column-gap: 4px;
`;

const Nutritional = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: var(--black);
`;

const Unit = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: var(--gray);
`;

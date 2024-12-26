"use client";

import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useSidebarStore } from "@/store/sidebarStore";
import SidebarItem from "./SidebarItem";
import styled from "styled-components";

const Sidebar = () => {
  const { items, items2, isOpen, open, close } = useSidebarStore();
  const isSecondOpen = useSidebarStore((state) => state.isSecondOpen);

  const RenderMenuArr = items.map((el, idx) => {
    return <SidebarItem key={idx} index={idx} text={el.text} isSelect={el.isSelect} query={el.query} type="major" />;
  });

  const RenderMenuArr2 = items2.map((el, idx) => {
    return <SidebarItem key={idx} index={idx} text={el.text} isSelect={el.isSelect} query={el.query} type="middle" />;
  });

  return (
    <>
      <Container open={isOpen} onClose={close} onOpen={open}>
        <ItemContainer>
          <MajorCategoryContainer>{RenderMenuArr}</MajorCategoryContainer>
          {isSecondOpen && <MiddleCategoryContainer>{RenderMenuArr2}</MiddleCategoryContainer>}
        </ItemContainer>
      </Container>
    </>
  );
};

export default Sidebar;

const Container = styled(SwipeableDrawer)`
  /* 사이드바 컨테이너 선택자 */
  & > .MuiPaper-root {
    background-color: white;
  }
`;

const ItemContainer = styled.div`
  display: flex;
`;

const MajorCategoryContainer = styled.div``;

const MiddleCategoryContainer = styled.div``;

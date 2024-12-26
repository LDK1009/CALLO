"use client";

import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { useSidebarStore } from "@/store/sidebarStore";
import SidebarItem from "./SidebarItem";
import styled from "styled-components";

const Sidebar = () => {
  const { items, isOpen, open, close } = useSidebarStore();

  const RenderMenuArr = items.map((el, idx) => {
    return <SidebarItem key={idx} index={idx} text={el.text} isSelect={el.isSelect} query={el.query} />;
  });

  return (
    <>
      <Button onClick={() => open()}>사이드바 버튼</Button>
      <Container open={isOpen} onClose={close} onOpen={open}>
        {RenderMenuArr}
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
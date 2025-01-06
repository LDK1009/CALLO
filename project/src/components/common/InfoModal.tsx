"use client";

import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Alert, Box, Button } from "@mui/material";
import { useModalStore } from "@/store";

const InfoModal = () => {
  const {isOpen, title, content, close} = useModalStore();

  return (
    <>
      {/* Modal 컴포넌트 */}
      <Modal
        open={isOpen} // 모달의 열림/닫힘 상태 제어
        onClose={close} // 모달 닫기 이벤트 핸들러
        closeAfterTransition // 트랜지션 종료 후 모달 제거
        slotProps={{
          backdrop: {
            invisible: true,
          },
        }}
      >
        {/* Fade 애니메이션으로 모달 표시 */}
        <Fade in={isOpen} timeout={300}>
          {/* 모달 내부 내용 */}
          <StyledBox>
          <Alert severity="success">{content}</Alert>

            <div>{title}</div>
            <div>{content}</div>
            <Button onClick={close}>닫기</Button>
          </StyledBox>
        </Fade>
      </Modal>
    </>
  );
};

export default InfoModal;

// Styled Component: 모달 박스 스타일 정의
const StyledBox = styled(Box)`
  position: absolute; // 박스를 화면 중앙에 위치시키기 위한 절대 위치 지정
  top: 50%; // 화면 세로 중앙
  left: 50%; // 화면 가로 중앙
  transform: translate(-50%, -50%); // 박스 크기 고려하여 정확히 중앙에 배치
  width: 200px; // 박스의 너비
  background-color: white;
  border: 2px solid #000; // 검은색 테두리
`;
import { createTheme } from "@mui/material/styles";

// MUI 테마 생성
const MuiTheme = createTheme({
  components: {
    // MUI의 TextField 컴포넌트에 대한 스타일 오버라이드
    MuiTextField: {
      // MUI의 TextField 컴포넌트 지정
      styleOverrides: {
        // MuiTextField의 내부 스타일을 덮어쓰기
        root: {
          // MuiTextField의 최상위 DOM 요소를 대상으로 스타일을 적용
          // root > MuiInputBase-root
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--test)", // 포커스 상태의 보더 색상 (CSS 변수 사용)
            borderWidth: "2px",
          },
          // 포커스 시 적용 스타일
          "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--test)", // 포커스 상태의 보더 색상 (CSS 변수 사용)
          },
          // 호버 적용
          "& .MuiInputBase-root:hover ": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--test)", // 포커스 상태의 보더 색상 (CSS 변수 사용)
            },
          },
        },
      },
    },
    // Select 컴포넌트 스타일 오버라이드
    MuiSelect: {
      styleOverrides: {
        root: {
          // 포커스 전
          "&.MuiInputBase-root::before": {
            borderBottomColor: "var(--main-color)",
            borderWidth: "1px",
          },
          // 포커스 후
          "&.MuiInputBase-root::after": {
            borderBottomColor: "var(--main-color)",
          },
          // 우측 아이콘
          "& .MuiSvgIcon-root": {
            color: "var(--main-color)",
          },
        },
      },
    },
  },
});

export default MuiTheme;

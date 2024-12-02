// 파일: src/styles/GlobalStyles.js
"use client"
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
  /* 기본 색상 */
  --main-color: #26539C;
  
  /* 서브 색상 (보조 색상) */
  --secondary-color: #4A78C4;
  --third-color: #8FADE6; 
  
  /* 강조 색상 */
  --accent-color: #FFD700; /* 강조: 골드 */

  /* 상태 색상 */
  --success-color: #28A745; /* 성공: 그린 */
  --warning-color: #FFC107; /* 경고: 노란색 */
  --error-color: #DC3545; /* 오류: 빨간색 */
  --info-color: #17A2B8; /* 정보: 청록색 */

  /* 배경 색상 */
  --background-color-light: #F4F8FC; /* 밝은 배경 */
  --background-color-dark: #1E3A68; /* 어두운 배경 */

  /* 텍스트 색상 */
  --text-color-primary: #000000; /* 주 텍스트: 흰색 */
  --text-color-secondary: #B0C4DE; /* 보조 텍스트: 연한 회색 */
  
  /* 타이틀 폰트 크기 */
  --main-title-font-size: 40px; /* 메인 타이틀 */
  --middle-title-font-size: 32px; /* 미들 타이틀 */
  --sub-title-font-size: 24px; /* 서브 타이틀 */

  /* 컨텐츠 폰트 크기 */
  --main-content-font-size: 18px; /* 메인 컨텐츠 */
  --middle-content-font-size: 16px; /* 미들 컨텐츠 */
  --sub-content-font-size: 14px; /* 서브 컨텐츠 */

  /* 메타 폰트 크기 */
  --main-meta-font-size: 14px; /* 메인 메타 */
  --middle-meta-font-size: 12px; /* 미들 메타 */
  --sub-meta-font-size: 10px; /* 서브 메타 */
  }

  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Body 스타일 */
  body {
    line-height: 1.6;
  }

  /* Anchor 태그 기본 스타일 */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* 버튼 스타일 */
  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  /* 추가 스타일 */
`;

export default GlobalStyles;

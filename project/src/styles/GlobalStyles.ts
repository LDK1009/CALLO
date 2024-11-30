// 파일: src/styles/GlobalStyles.js
"use client"
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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

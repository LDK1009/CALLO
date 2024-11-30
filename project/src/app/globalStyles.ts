// app/globalStyles.ts
'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* 기존 스타일 삭제 방지 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  div {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

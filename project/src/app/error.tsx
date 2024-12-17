"use client"; // 클라이언트 컴포넌트

import { useEffect } from "react";

interface ErrorProps {
  error: Error; // 에러 객체
  reset: () => void; // 에러 리셋 함수
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("에러입니다!", error);
  }, [error]);

  return (
    <html>
      <body>
        <h2>에러가 발생했습니다!</h2>
        <button onClick={() => reset()}>다시 시도</button>
      </body>
    </html>
  );
}

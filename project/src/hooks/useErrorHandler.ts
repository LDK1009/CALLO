import { useState } from "react";

// 전역 에러 핸들러 커스텀 훅
export default function useErrorHandler() {
  const [error, setError] = useState<string | null>(null);

  const handleError = async (callback: () => void | Promise<void>) => {
    try {
      await callback(); // 실제 이벤트 핸들러 실행
    } catch (err: any) {
      console.error("에러 발생:", err.message);
      setError(err.message || "알 수 없는 오류가 발생했습니다.");
    }
  };

  return { handleError, error };
}

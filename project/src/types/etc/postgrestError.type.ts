// ErrorType.ts
export type PostgrestError = {
  message: string; // 오류 메시지
  details?: string; // 오류 상세 정보
  hint?: string; // 오류 힌트
  code?: string; // 오류 코드
} | null; // 오류 정보 (없을 경우 null)

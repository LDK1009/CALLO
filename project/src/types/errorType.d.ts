// ErrorType.ts
export type ErrorType = {
  message: string; // 에러 메시지
  code?: number;   // 상태 코드 (옵션)
  details?: string; // 추가 디테일 정보 (옵션)
}

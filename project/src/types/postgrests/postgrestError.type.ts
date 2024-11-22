// ErrorType.ts
export interface PostgrestErrorType {
    message: string; // 에러 메시지
    code?: string;   // 상태 코드 (옵션)
    details?: string; // 추가 디테일 정보 (옵션)
  }
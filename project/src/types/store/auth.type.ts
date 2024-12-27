export type AuthStoreType = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
  uid: string;
  setUid: (value: string | undefined) => void;
  email: string;
  setEmail: (value: string | undefined) => void;
};

export type UserInfo = {
  id: string; // UUID (사용자 고유 ID)
  email: string | null; // 이메일 (선택적)
  phone: string | null; // 전화번호 (선택적)
  user_metadata: Record<string, unknown>; // 사용자 메타데이터
  created_at: string; // 계정 생성 시간 (ISO 형식)
  updated_at: string; // 마지막 업데이트 시간 (ISO 형식)
};

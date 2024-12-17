import useErrorHandler from "@/hooks/useErrorHandler";
import { supabase } from "@/lib/supabaseClient";

/**
 * 현재 사용자의 로그인 상태를 확인하는 함수
 * @returns {Promise<boolean>} 로그인 상태 (true: 로그인됨, false: 로그인되지 않음)
 */
export async function checkUserSession(): Promise<boolean> {
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error) {
    console.error("세션 확인 중 에러 발생:", error.message);
  }

  if (session) {
    return true;
  } else {
    return false;
  }
}
import { checkUserSession } from "@/lib/auth/checkUserSession";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState<Promise<boolean> | null>();
  const [uuid, setUuid] = useState<string>();

  function useCheckLogin() {
    const result = checkUserSession();
    setIsLogin(result);
  }

  async function getUuid() {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error("사용자 UUID 가져오기 실패:", error.message);
      return null;
    }

    setUuid(user?.id); // UUID 반환
  }

  return { isLogin, uuid, useCheckLogin, getUuid };
};

export default useAuth;

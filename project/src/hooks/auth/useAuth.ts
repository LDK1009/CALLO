import { checkUserSession } from "@/services/auth/checkUserSession";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { signIn } from "@/services/auth/signIn";
import { signInType } from "@/types/auth/login.type";
import { useModalStore } from "@/store";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState<Promise<boolean> | null>();
  const [uuid, setUuid] = useState<string>();
  const { open } = useModalStore();
  const router = useRouter();

  // 로그인 여부 판단
  function checkLogin() {
    const result = checkUserSession();
    setIsLogin(result);
  }

  // 유저의 UUID 가져오기
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

  // 로그인
  async function handleSignIn({ email, password }: signInType) {
    const error = await signIn({ email, password });
    if (error) {
      open({
        title: "Error",
        content: "로그인 에러 발생",
      });
    }
    else{
      router.push("/");
    }
  }

  return { isLogin, uuid, checkLogin, getUuid, handleSignIn };
};

export default useAuth;

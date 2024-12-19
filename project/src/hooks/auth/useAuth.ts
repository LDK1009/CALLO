import { checkUserSession } from "@/services/auth/checkUserSession";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { signIn } from "@/services/auth/signIn";
import { signInType } from "@/types/auth/login.type";
import { useModalStore } from "@/store";
import { useRouter } from "next/navigation";
import { signUpType } from "@/types/auth/signUp.type";
import { signUp } from "@/services/auth/signUp";

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
    } else {
      router.push("/");
    }
  }

  // 회원가입
  async function handleSignUp({ email, password }: signUpType) {
    const { data, error } = await signUp({ email, password });

    // 이메일 중복 검사
    if (data?.user?.aud === "authenticated") {
      open({
        title: "Error",
        content: `회원가입 에러 발생
        이미 가입된 이메일입니다.
        `,
      });
    }
    // 에러 검사
    else if (error) {
      open({
        title: "Error",
        content: `회원가입 에러 발생
        잠시 후 다시 시도해주세요.
        `,
      });
    }
    // 인증 메일 발송 완료 페이지로 리다이렉트
    else {
      router.push("/sign-up/email-sent");
    }
  }

  return { isLogin, uuid, checkLogin, getUuid, handleSignIn, handleSignUp };
};

export default useAuth;

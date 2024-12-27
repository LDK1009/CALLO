import { signIn } from "@/services/auth/signIn";
import { signInType } from "@/types/auth/login.type";
import { useAuthStore, useModalStore } from "@/store";
import { useRouter } from "next/navigation";
import { signUpType } from "@/types/auth/signUp.type";
import { signUp } from "@/services/auth/signUp";
import { getSession } from "@/services/auth/session";

const useAuth = () => {
  const { open } = useModalStore();
  const router = useRouter();
  const { isLogin, setIsLogin, setUid, setEmail } = useAuthStore();

  // 로그인 여부 판단
  async function handleIsLogin() {
    const { data, error } = await getSession();

    // 오류 X
    if (!error) {
      if (data.session !== null) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    }
    // 오류 O
    else {
      open({
        title: "Error",
        content: "세션 오류 발생",
      });
    }
  }

  // 로그인
  async function handleSignIn({ email, password }: signInType) {
    const { data, error } = await signIn({ email, password });

    if (!error) {
      setIsLogin(true);
      setEmail(data.user.email);
      setUid(data.user.id);
      router.push("/");
    } else {
      open({
        title: "Error",
        content: "로그인 에러 발생",
      });
    }
  }

  // 회원가입
  async function handleSignUp({ email, password }: signUpType) {
    const { data, error } = await signUp({ email, password });
    console.log("data:", data);
    console.log("error:", error?.code);
    // 에러 처리
    if (error) {
      open({
        title: "Error",
        content: `회원가입 에러 발생
        잠시 후 다시 시도해주세요.
        `,
      });
      return;
    }

    // 이메일 중복 검사
    if (data?.user?.role === "") {
      open({
        title: "Error",
        content: `회원가입 에러 발생
        이미 가입된 이메일입니다.
        `,
      });
    }
    // 인증 메일 발송 완료 페이지로 리다이렉트
    else {
      router.push("/sign-up/email-sent");
    }
  }

  return { isLogin, handleIsLogin, handleSignIn, handleSignUp };
};

export default useAuth;

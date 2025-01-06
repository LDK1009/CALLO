import { signIn } from "@/services/auth/signIn";
import { signInType } from "@/types/auth/login.type";
import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";
import { signUpType } from "@/types/auth/signUp.type";
import { signUp } from "@/services/auth/signUp";
import { getSession } from "@/services/auth/session";
import { signOut } from "@/services/auth/signOut";
import { enqueueSnackbar } from "notistack";

const useAuth = () => {
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
      enqueueSnackbar('Error : 세션 오류.', { variant: "error" });
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
      enqueueSnackbar('Error : 로그인', { variant: "error" });
    }
  }

  async function handleSignOut() {
    const {error} = await signOut();

    if (!error){
      const storageKey = "auth-storage"; // persist에서 설정한 스토리지 이름과 동일해야 함
      localStorage.removeItem(storageKey); // localStorage에서 스토리지 삭제
      useAuthStore.setState({
        isLogin: false,
        uid: "",
        email: "",
      }); // Zustand 상태 초기화
    }
    else{
      enqueueSnackbar('Error : 로그아웃', { variant: "error" });
    }
    
  }

  // 회원가입
  async function handleSignUp({ email, password }: signUpType) {
    const { data, error } = await signUp({ email, password });
    console.log("data:", data);
    console.log("error:", error?.code);
    // 에러 처리
    if (error) {
      enqueueSnackbar('Error : 회원가입, 잠시 후 다시 시도해주세요.', { variant: "error" });
      return;
    }

    // 이메일 중복 검사
    if (data?.user?.role === "") {
      enqueueSnackbar('Error : 회원가입, 이미 가입된 이메일입니다.', { variant: "error" });
    }
    // 인증 메일 발송 완료 페이지로 리다이렉트
    else {
      router.push("/sign-up/email-sent");
    }
  }

  return { isLogin, handleIsLogin, handleSignIn,handleSignOut, handleSignUp };
};

export default useAuth;

import { useModalStore } from "@/store";

// 전역 에러 핸들러 커스텀 훅
export default function useErrorHandler() {
  const {open} = useModalStore();

  const handleError = async (callback: () => void | Promise<void>) => {
    try {
      await callback(); // 실제 이벤트 핸들러 실행
    } catch (err:unknown) {
      open({
        title:"Error",
        content:"에러 발생"
      })
      console.error(err);
    }
  };

  return { handleError };
}

import { enqueueSnackbar } from "notistack";

// 전역 에러 핸들러 커스텀 훅
export default function useErrorHandler() {

  const handleError = async (callback: () => void | Promise<void>) => {
    try {
      await callback(); // 실제 이벤트 핸들러 실행
    } catch (err:unknown) {
      enqueueSnackbar('Error', { variant: "error" });
      console.error(err);
    }
  };

  return { handleError };
}

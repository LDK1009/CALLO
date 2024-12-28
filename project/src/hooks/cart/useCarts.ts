import { getCarts, postCart } from "@/services/cart/cartService";
import { PostCartType } from "@/types/services/cartService.type";
import { useAuthStore, useCartStore, useModalStore } from "@/store";

const useCarts = () => {
  const { open: modalOpen } = useModalStore();
  const { isLogin } = useAuthStore();
  const { setItems } = useCartStore();

  // 장바구니 가져오기
  const handleGetCarts = async (uid: string) => {
    const { data, error } = await getCarts(uid);

    if (!error) {
      setItems(data);
    } else {
      modalOpen({
        title: "Error",
        content: "장바구니 가져오기 오류 발생",
      });
    }
  };

  // 장바구니 추가
  const handlePostCarts = async (postData: PostCartType) => {
    console.log(isLogin);
    // 로그인 O
    if (isLogin) {
      const result = await postCart(postData);

      if (result.status === 201) {
        modalOpen({
          title: "Success",
          content: "상품을 장바구니에 추가했습니다! ",
        });
      } else {
        modalOpen({
          title: "Error",
          content: "장바구니 추가 기능 오류 발생",
        });
      }
    } else {
      // 로그인 X
      modalOpen({
        title: "Warning",
        content: "로그인 후 이용가능합니다.",
      });
    }
  };

  return { handleGetCarts, handlePostCarts };
};

export default useCarts;

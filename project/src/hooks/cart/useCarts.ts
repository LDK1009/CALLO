import { deleteCarts, getCarts, postCart } from "@/services/cart/cartService";
import { PostCartType } from "@/types/services/cartService.type";
import { useAuthStore, useCartStore } from "@/store";
import { enqueueSnackbar } from "notistack";

const useCarts = () => {
  const { isLogin, uid } = useAuthStore();
  const { items, setItems } = useCartStore();

  // 장바구니 가져오기
  const handleGetCarts = async (uid: string) => {
    const { data, error } = await getCarts(uid);

    if (!error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setItems(data);
    } else {
      enqueueSnackbar("Error : 장바구니 가져오기", { variant: "error" });
    }
  };

  // 장바구니 추가
  const handlePostCarts = async (postData: PostCartType) => {
    console.log(isLogin);
    // 로그인 O
    if (isLogin) {
      const result = await postCart(postData);

      if (result.status === 201) {
        enqueueSnackbar("상품을 장바구니에 추가했습니다!", { variant: "success" });
      } else {
        enqueueSnackbar("Error : 장바구니 추가", { variant: "error" });
      }
    } else {
      // 로그인 X
      enqueueSnackbar("Warning : 로그인 후 이용가능합니다.", { variant: "warning" });
    }
  };

  // 장바구니 삭제
  async function handleDeleteCarts() {
    // 선택된 아이템 배열
    const selectedItems = items?.filter((el) => el.isSelect === true);
    // 선택되지 않은 아이템 배열
    const notSelectedItems = items?.filter((el) => el.isSelect === false);
    // 유저 아이디
    const user_id = uid;
    // 선택된 상품 id 배열(중복 X)
    const product_ids = Array.from(
      new Set(
        selectedItems?.map((el) => {
          return el?.id;
        })
      )
    );

    const { error } = await deleteCarts({ user_id, product_ids });

    // 에러 처리
    if (!error) {
      console.log("삭제 완료!");
      setItems(notSelectedItems);
    } else {
      enqueueSnackbar("Error : 장바구니 삭제", { variant: "error" });
    }
  }

  return { handleGetCarts, handlePostCarts, handleDeleteCarts };
};

export default useCarts;

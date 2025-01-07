import { supabase } from "../../lib/supabaseClient";
import { DeleteCartsType, PostCartReturnType, PostCartType } from "@/types/services/cartService.type";

// GET
// 장바구니 데이터 가져오는 함수
export async function getCarts(userId: string) {
  // 장바구니 상품 ID 배열 가져오기
  const { data: productIdData } = await supabase
    .from("carts") // cart 테이블
    .select("product_id")
    .eq("user_id", userId);

  // 장바구니 상품 ID 배열 데이터 구조 변경
  const productIdArr = productIdData?.map((el) => el.product_id) || [];

  // 장바구니 상품 배열 가져오기
  const response = await supabase.from("products").select("*").in("id", productIdArr);

  // 데이터 중복 삭제
  const uniqueData = response.data?.filter(
    (item, index, self) => self.findIndex((obj) => obj.id === item.id) === index
  );

  // 데이터 변환(isSelect 프로퍼티 추가)
  const returnData = uniqueData?.map((cart) => {
    return { ...cart, isSelect: false };
  });

  return { data: returnData, error: response.error };
}

export async function postCart(postData: PostCartType): Promise<PostCartReturnType> {
  const response = await supabase.from("carts").insert(postData);

  return response;
}

export async function deleteCarts({ user_id, product_ids }: DeleteCartsType) {
  const response = await supabase.from("carts").delete().eq("user_id", user_id).in("product_id", product_ids);

  return response;
}

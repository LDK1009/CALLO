import { supabase } from "../../lib/supabaseClient";
import {
  DeleteCartsType,
  GetCartsReturnType,
  PostCartReturnType,
  PostCartType,
} from "@/types/services/cartService.type";

// GET
// 장바구니 데이터 가져오는 함수
export async function getCarts(userId: string): Promise<GetCartsReturnType> {
  const response = await supabase
    .from("carts") // cart 테이블
    .select(
      `
      products(*)
    `
    )
    .eq("user_id", userId);

  // 데이터 변환
  const returnData = response.data?.map((cart) => {
    return { ...cart.products, isSelect: false };
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

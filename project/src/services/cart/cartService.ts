import { supabase } from "../../lib/supabaseClient";
import { GetCartsReturnType, PostCartReturnType, PostCartType } from "@/types/services/cartService.type";

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

  const returnData = response.data?.map(({ products }) => products);

  return { data: returnData, error: response.error };
}

export async function postCart(postData: PostCartType): Promise<PostCartReturnType> {
  const response = await supabase.from("carts").insert(postData);

  return response;
}

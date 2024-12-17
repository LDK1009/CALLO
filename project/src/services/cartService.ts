import { CartItem } from "@/types/store/cart.type";
import { supabase } from "../lib/supabaseClient";

// GET
// 장바구니 데이터 가져오는 함수
export async function getCarts(userId: string): Promise<CartItem[]> {
  const { data, error } = await supabase
    .from("carts") // cart 테이블
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error("장바구니 데이터 가져오기 실패:", error.message);
    return [];
  }

  console.log("장바구니 데이터:", data);
  return data;
}

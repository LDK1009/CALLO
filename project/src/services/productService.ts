import { Product } from "@/types/models/product.type";
import { supabase } from "../lib/supabaseClient";
import { GetProductsResponse } from "@/types/services/productServiceType";

export const getProdcts = async (filter: string): Promise<GetProductsResponse> => {
  switch (filter) {
    // 모든 상품 가져오기
    case "all":
      const {data, error} = await supabase.from("products").select("*");
      console.log("Fetch Products Result:", {data, error}); // 디버깅용 로그
      return {data, error};
      break;
      default:
        return { data: null, error: null }; // 기본 반환값 설정
  }
};

export const postProdct = async (product : Product) => {
  const response = await supabase.from("products").insert(product);
  return response;
};

export const deleteUser = async (id: number) => {
  const response = await supabase.from("products").delete().eq("id", id);
  return response;
};

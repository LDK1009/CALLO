import { Product } from "@/types/store/product.type";
import { supabase } from "../lib/supabaseClient";
import { GetProductsResponse } from "@/types/services/productService.type";

// GET
export const getProdcts = async (majorCategory?: string, middleCategory?: string): Promise<GetProductsResponse> => {
  let query = supabase.from("products").select("*");

  // 조건 체이닝
  if (majorCategory) {
    query = query.eq("majorCategory", majorCategory);
  }
  if (middleCategory) {
    query = query.eq("middleCategory", middleCategory);
  }
  if (majorCategory && middleCategory) {
    query = query.eq("majorCategory", majorCategory).eq("middleCategory", middleCategory);
  }

  // 쿼리 실행
  const { data, error } = await query;

  console.log("Fetch Products Result:", { data, error }); // 디버깅용 로그

  return { data, error };
};

// POST
export const postProdct = async (product: [Product]): Promise<GetProductsResponse> => {
  const response = await supabase.from("products").insert(product).select();
  return response;
};

// DELETE
export const deleteUser = async (id: number): Promise<GetProductsResponse> => {
  const response = await supabase.from("products").delete().eq("id", id);
  return response;
};

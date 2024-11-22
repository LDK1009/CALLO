import { Product } from "@/types/models/product.type";
import { supabase } from "../lib/supabaseClient";
import { GetProductsResponse } from "@/types/services/productServiceType";

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

export const postProdct = async (product: Product) => {
  const response = await supabase.from("products").insert(product);
  return response;
};

export const deleteUser = async (id: number) => {
  const response = await supabase.from("products").delete().eq("id", id);
  return response;
};

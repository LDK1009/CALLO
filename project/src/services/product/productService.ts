import { ProductType } from "@/types/store/product.type";
import { supabase } from "../../lib/supabaseClient";
import { GetProductsResponse } from "@/types/services/productService.type";

// GET
export const getProdcts = async (majorCategory?: string, middleCategory?: string, searchString?: string): Promise<GetProductsResponse> => {
  let query = supabase.from("products").select("*");

  // 조건 체이닝
  if (majorCategory) {
    query = query.eq("major_category", majorCategory);
  }
  if (middleCategory) {
    query = query.eq("middle_category", middleCategory);
  }
  if (majorCategory && middleCategory) {
    query = query.eq("major_category", majorCategory).eq("middle_category", middleCategory);
  }
  if(searchString){
    const searchWords = searchString.split(" "); // 공백 기준으로 분리
    const orQuery = searchWords.map(term => `name.ilike.%${term}%`).join(',');
    query = query.or(orQuery);
  }
  // 쿼리 실행
  const { data, error } = await query;

  return { data, error };
};

// POST
export const postProdct = async (product: [ProductType]): Promise<GetProductsResponse> => {
  const response = await supabase.from("products").insert(product).select();
  return response;
};

// DELETE
export const deleteUser = async (id: number): Promise<GetProductsResponse> => {
  const response = await supabase.from("products").delete().eq("id", id);
  return response;
};

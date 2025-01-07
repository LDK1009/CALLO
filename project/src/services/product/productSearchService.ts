import { supabase } from "../../lib/supabaseClient";

// GET
export const getProductSearch = async (searchString: string) => {
  const searchWords = searchString.split(" "); // 공백 기준으로 분리

  const orQuery = searchWords.map(term => `name.ilike.%${term}%`).join(',');

  const query = supabase.from("products").select("*").or(orQuery);

  const response = await query;

  return response;
};

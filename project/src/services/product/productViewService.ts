import { supabase } from "../../lib/supabaseClient";

// GET
export const patchProdctView = async (productId: number) => {
  const { data: curentView } = await supabase.from("products").select("view").eq("id", productId);
  const nextView = curentView?.[0].view + 1;
  const response = await supabase.from("products").update({ view: nextView }).eq("id", productId);

  return response;
};

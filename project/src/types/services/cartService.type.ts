import { PostgrestError } from "@supabase/supabase-js";
import { ProductType } from "../store/product.type";

export type PostCartType = {
  product_id: number | undefined;
  user_id: string;
  created_at?: Date;
};

export type GetCartsReturnType = {
  data:ProductType[][] | undefined;
  error: PostgrestError | null;
};

export type PostCartReturnType = {
  status: number;
  statusText: string;
};

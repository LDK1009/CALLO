import { PostgrestError } from "@supabase/supabase-js";
import { CartItemType } from "../store/cart.type";

export type PostCartType = {
  product_id: number | undefined;
  user_id: string;
  created_at?: Date;
};

export type GetCartsReturnType = {
  data: CartItemType[][] | undefined;
  error: PostgrestError | null;
};

export type PostCartReturnType = {
  status: number;
  statusText: string;
};

export type DeleteCartsType = {
  user_id: string;
  product_ids: (number | undefined)[];
};

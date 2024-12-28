import { ProductType } from "./product.type";

export type CartState = {
  items: CartItem[] | null;
  setItems: (items: ProductType[][] | undefined) => void;
};

export type CartItem = {
  product_id: number; // int4
  user_id: string; // uuid
  created_at?: string; // timestamptz
};

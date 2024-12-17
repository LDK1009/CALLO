export type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
};

export type CartItem = {
  product_id: number; // int4
  user_id: string; // uuid
  created_at?: string; // timestamptz
};

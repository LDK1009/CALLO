import { ProductType } from "./product.type";

export type CartStoreType = {
  items: CartItemType[] | null;
  setItems: (items: CartItemType[] | undefined) => void;
};

export type CartItemType = ProductType &{
  isSelect : boolean;
};
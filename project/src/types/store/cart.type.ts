import { ProductType } from "./product.type";

export type CartState = {
  items: CartItemType[] | null;
  setItems: (items: ProductType[][] | undefined) => void;
};

export type CartItemType = ProductType &{
  isSelect : boolean;
};
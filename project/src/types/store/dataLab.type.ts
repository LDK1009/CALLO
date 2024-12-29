import { ProductType } from "./product.type";

export type DataLabStoreType = {
  items: DataLabItemType[] | null;
  setItems: (items: DataLabItemType[] | null | undefined) => void;
};

export type DataLabItemType = ProductType &{
  isSelect : boolean;
};
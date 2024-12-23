import { ProductType } from "../store/product.type";
import { PostgrestError } from "../etc/postgrestError.type";

export type GetProductsResponse = {
  data: ProductType[] | null;
  error: PostgrestError | null;
};

import { Product } from "../store/product.type";
import { PostgrestError } from "../etc/postgrestError.type";

export type GetProductsResponse = {
  data: Product[] | null;
  error: PostgrestError | null;
};

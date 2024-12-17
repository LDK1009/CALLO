import { Product } from "../store/product.type";
import { PostgrestError } from "../postgrests/postgrestError.type";

export type GetProductsResponse = {
  data: Product[] | null;
  error: PostgrestError | null;
};

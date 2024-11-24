import { Product } from "../models/product.type";

export type GetProductsResponse = {
    data: Product[] | null;
    error: PostgrestError | null;
}
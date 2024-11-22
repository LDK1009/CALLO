import { Product } from "../models/product.type";

export interface GetProductsResponse {
    data: Product[] | null;
    error: PostgrestError | null;
}
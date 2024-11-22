import { useState } from "react";
import { getProdcts } from "../services/productService";
import { Product } from "@/types/models/product.type";
import { PostgrestErrorType } from "@/types/postgrests/postgrestError.type";

const useProduct = () => {
  const [products, setProducts] = useState<Product[] | null>([]);
  const [error, setError] = useState<PostgrestErrorType | null>(null);

  const getAllProducts = async () => {
    const response = await getProdcts();

    if (response) {
      const { data, error } = response;
      setProducts(data);
      setError(error);
      return;
    }
  };

  return { getAllProducts, products, error };
};

export default useProduct;

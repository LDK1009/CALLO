import { useState } from "react";
import { getProdcts, postProdct } from "../services/productService";
import { Product } from "@/types/models/product.type";
import { PostgrestError } from "@/types/postgrests/postgrestError.type";

const useProduct = () => {
  const [responseData, setResponseData] = useState<Product[] | null>([]);
  const [error, setError] = useState<PostgrestError | null>(null);

  const getAllProducts = async () => {
    const response = await getProdcts();

    if (response) {
      const { data, error } = response;
      setResponseData(data);
      setError(error);
      return;
    }
  };

  const postProducts = async (product: [Product]) => {
    const response = await postProdct(product);

    if (response) {
      const { data, error } = response;
      setResponseData(data);
      setError(error);
      return;
    }
  };

  return { getAllProducts, postProducts, responseData, error };
};

export default useProduct;

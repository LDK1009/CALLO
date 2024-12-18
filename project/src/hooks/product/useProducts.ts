import { useState } from "react";
import { getProdcts, postProdct } from "../../services/product/productService";
import { Product } from "@/types/store/product.type";
import { PostgrestError } from "@/types/etc/postgrestError.type";

const useProducts = () => {
  const [responseData, setResponseData] = useState<Product[] | null>([]);
  const [error, setError] = useState<PostgrestError | null>(null);

  // 상품 가져오기
  const useGetProducts = async () => {
    const response = await getProdcts();

    if (response) {
      const { data, error } = response;
      setResponseData(data);
      setError(error);
      return;
    }
  };

  // 상품 등록
  const usePostProducts = async (product: [Product]) => {
    const response = await postProdct(product);

    if (response) {
      const { data, error } = response;
      setResponseData(data);
      setError(error);
      return;
    }
  };

  return { useGetProducts, usePostProducts, responseData, error };
};

export default useProducts;

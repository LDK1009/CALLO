import { getProdcts } from "../../services/product/productService";
import { useModalStore, useProductStore } from "@/store";

const useProducts = () => {
  const { open } = useModalStore();
  const { majorCategory, middleCategory, setProducts, setPopularProducts } = useProductStore();

  // 상품 가져오기
  const handleGetProducts = async () => {
    const { data, error } = await getProdcts(majorCategory, middleCategory);

    if (error) {
      open({
        title: "Error",
        content: "상품 데이터 패칭 에러 발생",
      });
    } else {
      setProducts(data);
    }
  };

  // 인기 상품 가져오기
  const handleGetPopularProducts = async () => {
    const { data, error } = await getProdcts(); // 모든 상품 가져오기

    if (!error) {
      setPopularProducts(data);
    } else {
      open({
        title: "Error",
        content: "인기 상품 데이터 패칭 에러 발생",
      });
    }
  };

  return { handleGetProducts, handleGetPopularProducts };
};

export default useProducts;

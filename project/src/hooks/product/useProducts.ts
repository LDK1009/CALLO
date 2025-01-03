import { getProdcts } from "../../services/product/productService";
import { useModalStore, useProductStore } from "@/store";

const useProducts = () => {
  const { open } = useModalStore();
  const { majorCategory, middleCategory, setProducts } = useProductStore();

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

  return { handleGetProducts };
};

export default useProducts;

import { enqueueSnackbar } from "notistack";
import { getProdcts } from "../../services/product/productService";
import { useProductStore } from "@/store";

const useProducts = () => {
  const { majorCategory, middleCategory, setProducts, setPopularProducts } = useProductStore();

  // 상품 가져오기
  const handleGetProducts = async () => {
    const { data, error } = await getProdcts(majorCategory, middleCategory);

    if (error) {
      enqueueSnackbar('Error : 상품 가져오기', { variant: "error" });
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
      enqueueSnackbar('Error : 인기 상품 가져오기', { variant: "error" });
    }
  };

  return { handleGetProducts, handleGetPopularProducts };
};

export default useProducts;

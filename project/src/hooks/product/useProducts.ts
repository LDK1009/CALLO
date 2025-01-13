import { enqueueSnackbar } from "notistack";
import { getPopularProducts, getProdcts } from "../../services/product/productService";
import { useProductStore } from "@/store";
import { getProductSearch } from "@/services/product/productSearchService";
import { patchProdctView } from "@/services/product/productViewService";

const useProducts = () => {
  const { majorCategory, middleCategory, searchString, setProducts, setPopularProducts } = useProductStore();

  // 상품 가져오기
  const handleGetProducts = async () => {
    const { data, error } = await getProdcts(majorCategory, middleCategory, searchString);

    if (error) {
      enqueueSnackbar("Error : 상품 가져오기", { variant: "error" });
    } else {
      setProducts(data);
    }
  };

  // 인기 상품 가져오기
  const handleGetPopularProducts = async () => {
    const { data, error } = await getPopularProducts(); // 모든 상품 가져오기

    if (!error) {
      setPopularProducts(data);
    } else {
      enqueueSnackbar("Error : 인기 상품 가져오기", { variant: "error" });
    }
  };

  // 검색 상품 가져오기
  const handleGetProductSearch = async (searchString: string) => {
    const { data, error } = await getProductSearch(searchString); // 모든 상품 가져오기

    if (!error) {
      setProducts(data);
    } else {
      enqueueSnackbar("Error : 검색 상품 가져오기", { variant: "error" });
    }
  };

  // 조회수 증가
  const hanleIncreaseView = async (productId: number) => {
    await patchProdctView(productId);
  };

  return { handleGetProducts, handleGetPopularProducts, handleGetProductSearch, hanleIncreaseView };
};

export default useProducts;

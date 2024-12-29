import { useAuthStore, useCartStore, useDataLabStore } from "@/store";
import useCarts from "../cart/useCarts";
import { useEffect } from "react";

const useDataLab = () => {
  const { items: cartItems } = useCartStore();
  const { setItems: setDataLabItems } = useDataLabStore();
  const { handleGetCarts } = useCarts();
  const {uid} = useAuthStore();

  // 데이터 가져오기
  async function dataFetch() {
    await handleGetCarts(uid);
  }
  
  useEffect(() => {
    setDataLabItems(cartItems);
  }, [cartItems]);


  return { dataFetch };
};

export default useDataLab;

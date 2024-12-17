import { useState } from "react";
import { getCarts } from "@/services/cartService";
import { Cart } from "@/types/models/cart.type";

const useCarts = () => {
  const [carts, setCarts] = useState<Cart[] | null>([]);

  // 장바구니 가져오기
  const useGetCarts = async (userId: string) => {
    const data = await getCarts(userId);
    setCarts(data);
  };

  // 장바구니 추가
  // const useAddCarts = async () => {};

  return { carts, useGetCarts };
};

export default useCarts;

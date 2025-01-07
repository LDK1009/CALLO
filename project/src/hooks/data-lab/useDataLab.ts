import { useAuthStore, useCartStore, useDataLabResultStore, useDataLabStore } from "@/store";
import useCarts from "../cart/useCarts";
import { useEffect } from "react";

const useDataLab = () => {
  const { items: cartItems } = useCartStore();
  const { setItems: setDataLabItems } = useDataLabStore();
  const {
    items: dataLabResultItems,
    setItems: setDataLabResultItems,
    sort,
    setSort,
    setUnit,
  } = useDataLabResultStore();

  const { handleGetCarts } = useCarts();
  const { uid } = useAuthStore();

  // 데이터 가져오기
  async function dataFetch() {
    await handleGetCarts(uid);
  }

  // 정렬 상태 변경
  function handleSort(value: string | unknown) {
    setSort(value);
  }

  // 데이터랩 결과 페이지 상품 단위 변경
  function unitChange(sort: string | unknown) {
    if (sort === "calories") {
      setUnit("Kcal");
    } else {
      setUnit("g");
    }
  }

  // 장바구니 아이템 변경 추적
  useEffect(() => {
    setDataLabItems(cartItems);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  // 데이터랩 결과 정렬 변경 추적
  useEffect(() => {
    let nextItems;
    let nutritional1;
    let nutritional2;

    if (dataLabResultItems) {
      nextItems = [...dataLabResultItems].sort((a, b) => {
        if (typeof sort === "string") {
          nutritional1 = a.nutritional[sort];
          nutritional2 = b.nutritional[sort];

          return nutritional1 - nutritional2;
        }
        return 0;
      });
    }

    unitChange(sort); // 유닛 변경
    setDataLabResultItems(nextItems);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  useEffect(() => {
  }, [dataLabResultItems]);

  return { dataFetch, handleSort };
};

export default useDataLab;

"use client";

import useProducts from "@/hooks/product/useProducts";
import { useEffect } from "react";
import Item from "../home/Item";

const ItemContainer = () => {
  const { useGetProducts, responseData } = useProducts();

  useEffect(() => {
    useGetProducts();
  }, []);

  return (
    <div>
      {responseData?.map((el, idx) => {
        return <Item key={idx} data={el} />;
      })}
    </div>
  );
};

export default ItemContainer;

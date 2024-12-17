"use client";

import useProduct from "@/hooks/useProduct";
import { useEffect } from "react";
import Item from "../home/Item";

const ItemContainer = () => {
  const { getAllProducts, responseData } = useProduct();

  useEffect(() => {
    getAllProducts();
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

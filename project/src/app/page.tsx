"use client";

import { useEffect } from "react";
import useProduct from "../hooks/useProduct";

export default function Home() {
  const { getAllProducts, products, loading, error } = useProduct();

  useEffect(() => {
    getAllProducts();
  }, [products]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div>
      hi
    </div>
  );
}

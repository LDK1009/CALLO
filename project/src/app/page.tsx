"use client";

import { useEffect } from "react";
import useProduct from "../hooks/useProduct";

export default function Home() {
  const { getAllProducts, products, error } = useProduct();

  useEffect(() => {
      getAllProducts();
  }, []);

  return (
      <div>
          <pre>{JSON.stringify(products, null, 2)}</pre>
          <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
  );
}

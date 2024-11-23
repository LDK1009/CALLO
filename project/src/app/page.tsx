"use client";

import { useEffect } from "react";
import useProduct from "../hooks/useProduct";

export default function Home() {
  const { getAllProducts, responseData, error } = useProduct();

  useEffect(() => {
      getAllProducts();
  }, []);

  return (
      <div>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
          <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
  );
}

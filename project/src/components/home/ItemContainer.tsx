"use client";

import useProduct from "@/hooks/useProduct";
import { useEffect } from "react";
import Item from "./Item";
import { supabase } from "@/lib/supabaseClient";

const ItemContainer = () => {
  const { getAllProducts, responseData, error } = useProduct();

  async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      email: "m3088787@naver.com",
      password: "au95ju04!!",
    });
    console.log("data : ", data);
  }

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "m3088787@naver.com",
      password: "au95ju04!!",
    });

    console.log("data : ", data);
  }

  useEffect(() => {
    getAllProducts();
    signInWithEmail();
    // const { data, error } = await supabase.auth.signUp({
    //     email: 'm3088787@naver.com',
    //     password: 'au95ju04!!',
    //   })
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {responseData?.map((el, idx) => {
        return <Item key={idx} data={el} />;
      })}
    </div>
  );
};

export default ItemContainer;

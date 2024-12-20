"use client";

import useProducts from "@/hooks/product/useProducts";
import { Product } from "@/types/store/product.type";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  // 인풋 데이터
  const [formData, setFormData] = useState<Product>({
    name: "",
    link: "",
    src: "",
    major_category: "제로칼로리",
    middle_category: "음료",
    price: 0,
    piece: 0,
    price_per_piece: 0,
    nutritional: {
      calories: 0,
      carbohydrate: 0,
      protein: 0,
      fat: 0,
    },
  });

  // POST 커스텀훅
  const { usePostProducts, responseData: postResponse, error: postError } = useProducts();

  // input 데이터 변경 감지 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // nutritional 객체 내부 입력값 감지
    if (["calories", "carbohydrate", "protein", "fat"].includes(name)) {
      setFormData((prevData) => ({
        ...prevData,
        nutritional: {
          ...prevData.nutritional,
          [name]: Number(value), // 숫자 변환
        },
      }));
    }
    // 일반적인 입력값 감지
    else {
      setFormData({
        ...formData,
        [name]: name === "price" || name === "piece" ? Number(value) : value, // 숫자 필드 변환
      });
    }
  };

  // form 제출 핸들러
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await usePostProducts([formData]);
    ClearFormData();
  };

  // 폼 데이터 초기화
  const ClearFormData = () => {
    setFormData({
      name: "",
      link: "",
      src: "",
      major_category: "제로칼로리",
      middle_category: "음료",
      price: 0,
      piece: 0,
      price_per_piece: 0,
      nutritional: {
        calories: 0,
        carbohydrate: 0,
        protein: 0,
        fat: 0,
      },
    });
  };

  // price_per_piece 계산
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      price_per_piece: prevData.piece !== 0 ? parseFloat((prevData.price / prevData.piece).toFixed(0)) : 0,
    }));
  }, [formData.price, formData.piece]);

  // 입력값 콘솔
  // useEffect(() => {
  //     console.log(formData);
  // }, [formData]);

  // POST 데이터 확인
  useEffect(() => {
    console.log("postResponse : ", postResponse);
    console.log("postError : ", postError);
  }, [postResponse, postError]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div>
        <label>link:</label>
        <input type="text" name="link" value={formData.link} onChange={handleChange} />
      </div>

      <div>
        <label>src:</label>
        <input type="text" name="src" value={formData.src} onChange={handleChange} />
      </div>

      <div>
        <label>major_category:</label>
        <input type="text" name="major_category" value={formData.major_category} disabled />
      </div>

      <div>
        <label>middle_category:</label>
        <input type="text" name="middle_category" value={formData.middle_category} disabled />
      </div>

      <div>
        <label>price:</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} />
      </div>

      <div>
        <label>piece:</label>
        <input type="number" name="piece" value={formData.piece} onChange={handleChange} />
      </div>

      <div>
        <label>price_per_piece:</label>
        <input type="number" name="price_per_piece" value={formData.price_per_piece} disabled />
      </div>

      {/* Nutritional Data */}
      <div>
        <label>calories:</label>
        <input type="number" name="calories" value={formData.nutritional.calories} onChange={handleChange} />
      </div>

      <div>
        <label>carbohydrate:</label>
        <input type="number" name="carbohydrate" value={formData.nutritional.carbohydrate} onChange={handleChange} />
      </div>

      <div>
        <label>protein:</label>
        <input type="number" name="protein" value={formData.nutritional.protein} onChange={handleChange} />
      </div>

      <div>
        <label>fat:</label>
        <input type="number" name="fat" value={formData.nutritional.fat} onChange={handleChange} />
      </div>

      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          fontSize: "20px",
          width: "200px",
          height: "50px",
          border: "0px",
          borderRadius: "10px",
          margin: "40px 0px",
          cursor: "pointer", // 커서 추가
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Dashboard;

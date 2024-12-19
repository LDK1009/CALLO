"use client";

import { InputProps } from "@/types/components/input.type";

const Input = ({ label, type = "text", value, required = true, placeholder, onChange }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} required={required} placeholder={placeholder} />
    </div>
  );
};

export default Input;

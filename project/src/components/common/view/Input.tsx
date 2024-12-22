"use client";

import { InputProps } from "@/types/components/input.type";
import { TextField } from "@mui/material";

const Input = ({ label, type = "text", value, required = true, placeholder, onChange }: InputProps) => {
  return (
    <>
      <TextField
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;

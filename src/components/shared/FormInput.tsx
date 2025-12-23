"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  label?: string;
  type?: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const FormInput = ({
  label,
  type = "text",
  placeholder,
  register,
  error,
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          {...register}
          className={`w-full px-4 py-2 border rounded-lg outline-none
          focus:ring-2 focus:ring-[#BE968E] focus:border-[#BE968E]
          ${error ? "border-red-500" : "border-gray-300"}`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2
            text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {error && (
        <span className="text-sm text-red-500">{error.message}</span>
      )}
    </div>
  );
};

export default FormInput;

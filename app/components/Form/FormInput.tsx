// app/components/Form/FormInput.tsx
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { CheckoutFormData } from "@/types/orderTypes"; // Import your types

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: keyof CheckoutFormData;
  register: UseFormRegister<CheckoutFormData>;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  register,
  error,
  ...rest
}) => (
  <div className="flex flex-col space-y-2">
    <label htmlFor={name} className="text-xs font-bold flex justify-between">
      {label}
      {error && <span className="text-red-500">{error}</span>}
    </label>
    <input
      id={name}
      {...register(name)}
      {...rest}
      className={`
                px-6 py-4 border rounded-lg text-sm font-bold placeholder:opacity-50
                focus:outline-none focus:ring-1 focus:ring-[#D87D4A]
                ${
                  error
                    ? "border-red-500"
                    : "border-gray-300 hover:border-black"
                }
            `}
    />
  </div>
);

export default FormInput;

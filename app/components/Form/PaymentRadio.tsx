// app/components/Form/PaymentRadio.tsx
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { CheckoutFormData } from "@/types/orderTypes";

interface PaymentRadioProps {
  label: string;
  value: "e-Money" | "Cash on Delivery";
  register: UseFormRegister<CheckoutFormData>;
  currentValue: string;
}

const PaymentRadio: React.FC<PaymentRadioProps> = ({
  label,
  value,
  register,
  currentValue,
}) => (
  <label
    className={`
        flex items-center space-x-4 p-5 rounded-lg border 
        cursor-pointer transition-all
        ${
          currentValue === value
            ? "border-[#D87D4A] ring-1 ring-[#D87D4A]"
            : "border-gray-300 hover:border-black"
        }
    `}
  >
    <input
      type="radio"
      value={value}
      {...register("paymentMethod")}
      className="hidden" // Hide default radio button
    />
    <div
      className={`
            w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center
            ${currentValue === value ? "border-[#D87D4A]" : "border-gray-300"}
        `}
    >
      {currentValue === value && (
        <div className="w-2.5 h-2.5 bg-[#D87D4A] rounded-full"></div>
      )}
    </div>
    <span className="text-sm font-bold">{label}</span>
  </label>
);

export default PaymentRadio;

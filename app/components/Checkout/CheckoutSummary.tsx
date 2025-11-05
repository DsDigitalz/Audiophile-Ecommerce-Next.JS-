// app/components/Checkout/CheckoutSummary.tsx
import React from "react";
import Image from "next/image";
import { CartItem } from "@/types/orderTypes";

interface CheckoutSummaryProps {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  taxes: number;
  grandTotal: number;
  isSubmitting: boolean;
  isValid: boolean;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  items,
  subtotal,
  shipping,
  taxes,
  grandTotal,
  isSubmitting,
  isValid,
}) => {
  const formatCurrency = (amount: number) => `$ ${amount.toLocaleString()}`;
  const ORANGE_ACCENT_BG = "bg-[#D87D4A]";

  return (
    <div className="bg-white p-8 rounded-lg">
      <h2 className="text-lg font-bold uppercase mb-8">SUMMARY</h2>

      {/* Item List */}
      <div className="space-y-6 mb-8">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                {/* Use Image for small icons */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={32}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-sm leading-none">
                  {item.name.replace(" HEADPHONES", "").replace(" SPEAKER", "")}
                </p>
                <p className="text-gray-500 text-sm">
                  {formatCurrency(item.price)}
                </p>
              </div>
            </div>
            <span className="text-gray-500 text-sm font-bold">
              x{item.quantity}
            </span>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-2 mb-8">
        <div className="flex justify-between uppercase">
          <p className="text-sm text-gray-500">TOTAL</p>
          <p className="text-lg font-bold">{formatCurrency(subtotal)}</p>
        </div>
        <div className="flex justify-between uppercase">
          <p className="text-sm text-gray-500">SHIPPING</p>
          <p className="text-lg font-bold">{formatCurrency(shipping)}</p>
        </div>
        <div className="flex justify-between uppercase">
          <p className="text-sm text-gray-500">VAT (INCLUDED)</p>
          <p className="text-lg font-bold">{formatCurrency(taxes)}</p>
        </div>
      </div>

      {/* Grand Total */}
      <div className="flex justify-between uppercase mb-8">
        <p className="text-sm text-gray-500">GRAND TOTAL</p>
        <p className="text-lg font-bold text-[#D87D4A]">
          {formatCurrency(grandTotal)}
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit" // Crucial: This button submits the form on the left
        form="checkout-form" // If form is outside, link it by ID
        className={`${ORANGE_ACCENT_BG} w-full text-white text-sm font-semibold uppercase px-6 py-3 tracking-widest hover:opacity-75 transition-opacity`}
        disabled={isSubmitting || items.length === 0 || !isValid}
      >
        {isSubmitting ? "Processing..." : "CONTINUE & PAY"}
      </button>

      {!isValid && (
        <p className="text-red-500 text-center text-xs mt-3">
          Please fill out all required fields correctly.
        </p>
      )}
    </div>
  );
};

export default CheckoutSummary;

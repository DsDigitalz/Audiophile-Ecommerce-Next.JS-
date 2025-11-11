// app/checkout/page.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/lib/store/cartStore";
import Image from "next/image";

// --- Constants ---
const ORANGE_ACCENT_BG = "bg-[#D87D4A]";
const ORANGE_ACCENT_TEXT = "text-[#D87D4A]";
// const LIGHT_GRAY_BG = "#F1F1F1";

// --- Form Field Sub-component (Pixel-Perfect Spacing) ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput: React.FC<InputProps> = ({ label, id, ...props }) => (
  <div className="flex flex-col gap-1 w-full">
    {" "}
    {/* Tighter gap-1 for label/input */}
    <label
      htmlFor={id}
      className="text-[12px] font-bold text-black flex justify-between mb-0.5" // Smaller text, no margin below label
    >
      {label}
    </label>
    <input
      id={id}
      className="w-full h-14 border border-gray-300 rounded-lg px-6 text-[14px] font-bold text-black opacity-75 focus:outline-none focus:border-[#D87D4A] hover:border-[#D87D4A]/50 transition-colors"
      {...props}
    />
  </div>
);

// --- Order Summary Component (Right Sidebar) ---
const OrderSummary = () => {
  const { items, total } = useCartStore(); // Use 'items' to be more descriptive
  const safeCart = items || [];
  const SHIPPING = 50; // Fixed shipping cost
  const VAT_RATE = 0.2; // 20% VAT rate
  const VAT = total * VAT_RATE;
  const GRAND_TOTAL = total + SHIPPING + VAT;

  // Format currency with commas, without decimal cents for this design
  const formatCurrency = (amount: number) =>
    `$ ${Math.round(amount).toLocaleString()}`;

  return (
    <aside
      className="bg-white p-6 md:p-8 rounded-lg w-full lg:w-[350px] h-fit" // Adjusted padding/height
      role="complementary"
      aria-label="Order Summary"
    >
      <h2 className="text-lg font-bold uppercase tracking-wider mb-8 text-black">
        SUMMARY
      </h2>

      {/* Cart Items */}
      <div className="space-y-6 mb-8 max-h-[250px] overflow-y-auto">
        {safeCart.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            {/* Item Details */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={32}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-[15px] leading-tight text-black">
                  {item.name.replace(" HEADPHONES", "").replace(" SPEAKER", "")}
                </p>
                <p className="text-gray-500 text-[14px] font-bold">
                  {formatCurrency(item.price)}
                </p>
              </div>
            </div>
            {/* Quantity */}
            <p className="text-gray-500 text-[15px] font-bold leading-tight">
              x{item.quantity}
            </p>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-2 mb-6">
        {" "}
        {/* Tighter space-y-2 and smaller mb-6 */}
        <div className="flex justify-between uppercase">
          <p className="text-[15px] text-gray-500 font-medium">TOTAL</p>
          <p className="text-lg font-bold text-black">
            {formatCurrency(total)}
          </p>
        </div>
        <div className="flex justify-between uppercase">
          <p className="text-[15px] text-gray-500 font-medium">SHIPPING</p>
          <p className="text-lg font-bold text-black">
            {formatCurrency(SHIPPING)}
          </p>
        </div>
        <div className="flex justify-between uppercase">
          <p className="text-[15px] text-gray-500 font-medium">
            VAT (INCLUDED)
          </p>
          <p className="text-lg font-bold text-black">{formatCurrency(VAT)}</p>
        </div>
      </div>

      {/* Grand Total */}
      <div className="flex justify-between uppercase mb-8">
        <p className="text-[15px] text-gray-500 font-medium">GRAND TOTAL</p>
        <p
          className="text-lg font-bold  text-[#D87D4A]"
          style={{ color: ORANGE_ACCENT_TEXT }} // Orange text for Grand Total
        >
          {formatCurrency(GRAND_TOTAL)}
        </p>
      </div>

      {/* Checkout Button */}
      <button
        type="submit"
        disabled={safeCart.length === 0}
        className={`${ORANGE_ACCENT_BG} w-full text-white text-[13px] font-semibold uppercase h-12 tracking-widest hover:opacity-75 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        CONTINUE & PAY
      </button>
    </aside>
  );
};

// --- MAIN CHECKOUT PAGE COMPONENT ---
export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("eMoney"); // State for payment method

  return (
    <main className="bg-[#F2F2F2] py-6 md:py-12 lg:py-20">
      {" "}
      {/* Slightly darker background F2F2F2 for contrast */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        {/* Go Back Link */}
        <div className="mb-6 md:mb-8">
          <Link
            href=""
            className="text-gray-500 hover:text-gray-900 transition-colors text-[15px] font-medium"
          >
            Go Back
          </Link>
        </div>

        <form
          className="flex flex-col lg:flex-row gap-8 lg:gap-[30px]"
          role="form"
          onSubmit={(e) => {
            e.preventDefault();
            // In a real app, form data validation and submission logic goes here.
            // For now, we assume success and trigger the Thank You modal (Next step)
            // alert("Payment Success - Proceed to Thank You Modal");
          }}
        >
          {/* LEFT SIDE: FORM DETAILS */}
          <div className="bg-white p-6 md:p-8 lg:p-12 rounded-lg w-full lg:grow">
            <h1 className="text-[28px] md:text-3xl font-bold uppercase tracking-wider mb-8 md:mb-10 text-black">
              CHECKOUT
            </h1>

            {/* --- BILLING DETAILS --- */}
            <section className="mb-10">
              <h2
                className="text-[13px] font-bold uppercase mb-4 text-[#D87D4A]"
                style={{ color: ORANGE_ACCENT_TEXT }}
              >
                BILLING DETAILS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                <FormInput
                  label="Name"
                  id="name"
                  type="text"
                  placeholder="Alexei Ward"
                  required
                />
                <FormInput
                  label="Email Address"
                  id="email"
                  type="email"
                  placeholder="alexei@mail.com"
                  required
                />
                <FormInput
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  placeholder="+1 202-555-0136"
                  required
                />
              </div>
            </section>

            {/* --- SHIPPING INFO --- */}
            <section className="mb-10">
              <h2
                className="text-[13px] font-bold uppercase mb-4 text-[#D87D4A]"
                style={{ color: ORANGE_ACCENT_TEXT }}
              >
                SHIPPING INFO
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                <div className="md:col-span-2">
                  <FormInput
                    label="Your Address"
                    id="address"
                    type="text"
                    placeholder="1137 Williams Avenue"
                    required
                  />
                </div>
                <FormInput
                  label="ZIP Code"
                  id="zip"
                  type="text"
                  placeholder="10001"
                  required
                />
                <FormInput
                  label="City"
                  id="city"
                  type="text"
                  placeholder="New York"
                  required
                />
                <FormInput
                  label="Country"
                  id="country"
                  type="text"
                  placeholder="United States"
                  required
                />
              </div>
            </section>

            {/* --- PAYMENT DETAILS --- */}
            <section>
              <h2
                className="text-[13px] font-bold uppercase mb-4  text-[#D87D4A]"
                style={{ color: ORANGE_ACCENT_TEXT }}
              >
                PAYMENT DETAILS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <p className="text-[12px] font-bold text-black">
                  Payment Method
                </p>
                {/* Radio Group for Payment Method */}
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="eMoney"
                    className={`border rounded-lg p-5 flex items-center gap-4 cursor-pointer transition-colors 
                                ${
                                  paymentMethod === "eMoney"
                                    ? "border-[#D87D4A]"
                                    : "border-gray-300 hover:border-gray-400"
                                }`}
                  >
                    <input
                      type="radio"
                      id="eMoney"
                      name="paymentMethod"
                      value="eMoney"
                      checked={paymentMethod === "eMoney"}
                      onChange={() => setPaymentMethod("eMoney")}
                      className="accent-[#D87D4A] w-5 h-5 focus:ring-transparent"
                    />
                    <span className="text-sm font-bold text-black">
                      e-Money
                    </span>
                  </label>

                  <label
                    htmlFor="cashOnDelivery"
                    className={`border rounded-lg p-5 flex items-center gap-4 cursor-pointer transition-colors 
                                ${
                                  paymentMethod === "cashOnDelivery"
                                    ? "border-[#D87D4A]"
                                    : "border-gray-300 hover:border-gray-400"
                                }`}
                  >
                    <input
                      type="radio"
                      id="cashOnDelivery"
                      name="paymentMethod"
                      value="cashOnDelivery"
                      checked={paymentMethod === "cashOnDelivery"}
                      onChange={() => setPaymentMethod("cashOnDelivery")}
                      className="accent-[#D87D4A] w-5 h-5 focus:ring-transparent"
                    />
                    <span className="text-sm font-bold text-black">
                      Cash on Delivery
                    </span>
                  </label>
                </div>

                {/* Conditional e-Money Fields */}
                {paymentMethod === "eMoney" && (
                  <>
                    <FormInput
                      label="e-Money Number"
                      id="eMoneyNumber"
                      type="text"
                      placeholder="238521993"
                      required={paymentMethod === "eMoney"}
                    />
                    <FormInput
                      label="e-Money PIN"
                      id="eMoneyPin"
                      type="text"
                      placeholder="6891"
                      required={paymentMethod === "eMoney"}
                    />
                  </>
                )}

                {/* Cash on Delivery Info Block (Placeholder for the gray block in the design) */}
                {paymentMethod === "cashOnDelivery" && (
                  <div className="md:col-span-2 flex items-start gap-4 mt-4">
                    <Image 
                      src="/assets/shared/icon-cash-on-delivery.svg"
                      alt="Cash on Delivery"
                      width={48}
                      height={48}
                    />
                    <p className="text-[15px] text-gray-500 leading-relaxed">
                      The Cash on Delivery option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct.
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* RIGHT SIDE: ORDER SUMMARY */}
          <OrderSummary />
        </form>



        
      </div>
    </main>
  );
}

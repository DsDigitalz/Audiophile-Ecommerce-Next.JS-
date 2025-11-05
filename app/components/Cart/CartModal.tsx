  // 📁 components/Cart/CartModal.tsx
  "use client";
  import React, { useEffect, useState } from "react";
  import { createPortal } from "react-dom";
  import Link from "next/link";
  import Image from "next/image";
  import { useCartStore } from "@/lib/store/cartStore";

  export default function CartModal() {
    const { cart, total, isOpen, closeModal, updateQuantity, clearCart } =
      useCartStore();
    const [mounted, setMounted] = useState(false);
    const ORANGE_ACCENT_BG = "bg-[#D87D4A]";
    const ORANGE_ACCENT_TEXT = "text-[#D87D4A]";

    // Essential for createPortal and preventing hydration errors
    useEffect(() => {
      setMounted(true);
    }, []);

    // Return null if not mounted (during server render/initial hydration) or if not open
    if (!mounted || !isOpen) return null;

    // Safely initialize 'cart' to [] if it's undefined during hydration (robustness)
    const safeCart = cart || [];
    const totalItems = safeCart.reduce((sum, item) => sum + item.quantity, 0);
    const formatCurrency = (amount: number) => `$ ${amount.toLocaleString()}`;

    return createPortal(
      // Modal Overlay (The dimmed background)
      <div
        className="fixed inset-0 z-[100] bg-[#00000069] bg-opacity-40 flex justify-end px-6 md:px-10 lg:px-20 pt-[90px] md:pt-[110px] lg:pt-[130px]" // Adjusted padding/pt for Header
        onClick={closeModal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        {/* Modal Content Container */}
        <div
          className="w-full max-w-[377px] h-fit bg-white rounded-lg p-7 md:p-8 shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
          role="document"
        >
          {/* Header: Cart title and "Remove all" */}
          <header className="flex justify-between items-center mb-8">
            <h2
              id="cart-title"
              className="text-lg font-bold uppercase tracking-wider text-black"
            >
              CART ({totalItems})
            </h2>
            <button
              onClick={clearCart}
              className="text-gray-500 text-[15px] underline hover:text-black transition-colors"
            >
              Remove all
            </button>
          </header>

          {/* Cart Items List */}
          <div className="space-y-6 mb-8 max-h-60 overflow-y-auto custom-scrollbar pr-1">
            {" "}
            {/* Added custom-scrollbar for styling */}
            {safeCart.length === 0 ? (
              <p className="text-center text-gray-500 text-[15px]">
                Your cart is empty.
              </p>
            ) : (
              safeCart.map((item) => (
                <article
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    {/* Product Image */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={32} // Small image size as per screenshot
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    {/* Product Name & Price */}
                    <div>
                      <p className="font-bold text-[15px] leading-tight text-black">
                        {item.name
                          .replace(" HEADPHONES", "")
                          .replace(" SPEAKER", "")
                          .replace(" WIRELESS", "")}{" "}
                        {/* Shorten name */}
                      </p>
                      <p className="text-gray-500 text-[14px] font-bold">
                        {formatCurrency(item.price)}
                      </p>
                    </div>
                  </div>
                  {/* Quantity Control */}
                  <div className="flex items-center bg-[#F1F1F1] text-black font-bold text-[13px] h-8">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-full flex items-center justify-center opacity-25 hover:opacity-100 transition-opacity"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span className="w-6 h-full flex items-center justify-center font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-full flex items-center justify-center opacity-25 hover:opacity-100 transition-opacity"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Total and Checkout Button */}
          <div className="mb-6">
            <div className="flex justify-between items-center uppercase mb-6">
              <p className="text-[15px] text-gray-500 font-medium">TOTAL</p>
              <p className="text-lg font-bold text-black">
                {formatCurrency(total)}
              </p>
            </div>

            <Link href="/checkout" passHref>
              <button
                onClick={closeModal} // Close modal on navigation
                // disabled={safeCart.length === 0}
                className={`${ORANGE_ACCENT_BG} w-full text-white text-[13px] font-semibold uppercase px-6 py-3 tracking-widest hover:opacity-75 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
                role="link" // Button acts as a link
              >
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>,
      document.body
    );
  }

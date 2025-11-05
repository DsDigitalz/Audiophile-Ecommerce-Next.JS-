// ./app/components/Cart/CartModal.tsx
"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/lib/store/cartStore";
import { motion, AnimatePresence } from "framer-motion";
// FIX: Import useShallow for shallow comparison in the selector
import { useShallow } from "zustand/react/shallow";

/**
 * CartModal Component
 */
export default function CartModal() {
  // FIX: Wrap the selector function with useShallow to prevent infinite loop
  const { items, total, isOpen, closeModal, updateQuantity, clearCart } =
    useCartStore(
      useShallow((state) => ({
        // <-- FIX APPLIED HERE
        items: state.items,
        total: state.total,
        isOpen: state.isOpen,
        closeModal: state.closeModal,
        updateQuantity: state.updateQuantity,
        clearCart: state.clearCart,
      }))
    );

  const [mounted, setMounted] = useState(false);
  const ORANGE_ACCENT_BG = "bg-[#D87D4A]";

  // Essential for createPortal and preventing hydration errors
  useEffect(() => {
    setMounted(true);
    // Add logic to close modal on Escape key press
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [closeModal]);

  // Return null if not mounted (during server render/initial hydration) or if not open
  if (!mounted) return null;

  const safeItems = items || [];
  const totalItems = safeItems.reduce((sum, item) => sum + item.quantity, 0);
  const formatCurrency = (amount: number) =>
    `$ ${amount.toLocaleString("en-US")}`;

  // Framer Motion Variants for the Modal Content (Slide/Fade on appearance)
  const modalContentVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.3,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        // Modal Overlay (The dimmed background)
        <motion.div
          className="fixed inset-0 z-[100] bg-[#00000069] bg-opacity-40 flex justify-end px-6 md:px-10 lg:px-20 pt-[90px] md:pt-[110px] lg:pt-[130px]"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-title"
          initial={{ opacity: 0 }} // Fade in overlay
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Content Container (Animated) */}
          <motion.section // <-- Semantic Markup: Use <section> for the modal content
            className="w-full max-w-[377px] h-fit bg-white rounded-lg p-7 md:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
            role="document"
            variants={modalContentVariants} // Apply slide/fade animation
            initial="hidden"
            animate="visible"
            exit="exit"
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
            <div
              role="list"
              className="space-y-6 mb-8 max-h-60 overflow-y-auto custom-scrollbar pr-1"
            >
              {safeItems.length === 0 ? (
                <p className="text-center text-gray-500 text-[15px]">
                  Your cart is empty.
                </p>
              ) : (
                safeItems.map((item) => (
                  <article // <-- Semantic Markup: Use <article> for each cart item
                    key={item.id}
                    className="flex justify-between items-center"
                    role="listitem"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Product Image and Details */}
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
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
                          {item.name
                            .replace(" HEADPHONES", "")
                            .replace(" SPEAKER", "")
                            .replace(" WIRELESS", "")}
                        </p>
                        <p className="text-gray-500 text-[14px] font-bold">
                          {formatCurrency(item.price)}
                        </p>
                      </div>
                    </div>
                    {/* Quantity Control */}
                    <div className="flex items-center bg-[#F1F1F1] text-black font-bold text-[13px] h-8">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-6 h-full flex items-center justify-center opacity-25 hover:opacity-100 transition-opacity"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                      <span className="w-6 h-full flex items-center justify-center font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-6 h-full flex items-center justify-center opacity-25 hover:opacity-100 transition-opacity"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </article>
                ))
              )}
            </div>

            {/* Total and Checkout Button */}
            <footer className="mb-0">
              <div className="flex justify-between items-center uppercase mb-6">
                <p className="text-[15px] text-gray-500 font-medium">TOTAL</p>
                <p className="text-lg font-bold text-black">
                  {formatCurrency(total)}
                </p>
              </div>

              <Link href="/checkout" passHref legacyBehavior>
                <button
                  onClick={closeModal} // Close modal on navigation
                  disabled={safeItems.length === 0}
                  className={`${ORANGE_ACCENT_BG} w-full text-white text-[13px] font-semibold uppercase px-6 py-3 tracking-widest hover:opacity-75 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
                  role="link"
                >
                  CHECKOUT
                </button>
              </Link>
            </footer>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

// app/components/Checkout/ConfirmationModal.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CartItem } from "@/types/orderTypes";

interface ConfirmationModalProps {
  orderData: {
    items: CartItem[];
    grandTotal: number;
    address: string;
    city: string;
  };
  onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  orderData,
  onClose,
}) => {
  const formatCurrency = (amount: number) => `$ ${amount.toLocaleString()}`;
  const ORANGE_ACCENT_BG = "bg-[#D87D4A]";
  const firstItem = orderData.items[0];
  const totalItems = orderData.items.length;

  return (
    // Semantic markup container for the modal overlay
    <section
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-[100] bg-black bg-opacity-40 flex items-center justify-center"
    >
      <div className="w-full max-w-md bg-white rounded-lg p-10 mx-4">
        {/* Checkmark Icon (You'll use an SVG or Image for the actual checkmark) */}
        <div className="w-16 h-16 rounded-full bg-[#D87D4A] flex items-center justify-center mb-8">
          <span className="text-white text-3xl">✓</span>
        </div>

        {/* Thank You Message */}
        <h2 className="text-3xl font-bold uppercase leading-tight mb-4">
          THANK YOU <br /> FOR YOUR ORDER
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Summary Block */}
        <div className="flex bg-gray-100 rounded-lg overflow-hidden mb-10">
          {/* Left Column: First Item Summary */}
          <div className="w-3/5 p-6 space-y-2">
            {firstItem && (
              <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <div className="flex space-x-4 items-center">
                  <Image
                    src={firstItem.image}
                    alt={firstItem.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <div>
                    <p className="text-sm font-bold leading-none">
                      {firstItem.name.replace(" HEADPHONES", "").slice(0, 7)}..
                    </p>
                    <p className="text-gray-500 text-xs">
                      {formatCurrency(firstItem.price)}
                    </p>
                  </div>
                </div>
                <span className="text-gray-500 text-sm font-bold">
                  x{firstItem.quantity}
                </span>
              </div>
            )}

            {/* More items indicator */}
            {totalItems > 1 && (
              <p className="text-gray-500 text-xs text-center pt-2">
                and {totalItems - 1} other item(s)
              </p>
            )}
          </div>

          {/* Right Column: Grand Total */}
          <div className="w-2/5 p-6 flex flex-col justify-end bg-black">
            <p className="text-gray-500 text-sm uppercase">GRAND TOTAL</p>
            <p className="text-lg font-bold text-white">
              {formatCurrency(orderData.grandTotal)}
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <Link href="/" passHref>
          <button
            onClick={onClose}
            className={`${ORANGE_ACCENT_BG} w-full text-white text-sm font-semibold uppercase px-6 py-3 tracking-widest hover:opacity-75 transition-opacity`}
          >
            BACK TO HOME
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ConfirmationModal;

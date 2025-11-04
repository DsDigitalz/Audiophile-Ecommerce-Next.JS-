// components/QuantityControl.tsx
"use client";

import React, { useState } from "react";

// This component handles the local state for quantity
export const QuantityControl = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex gap-4">
      <div className="bg-gray-100 flex items-center">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="px-4 py-3 hover:text-orange-500"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="px-6 py-3 font-bold">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-4 py-3 hover:text-orange-500"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button className="bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition">
        ADD TO CART
      </button>
    </div>
  );
};

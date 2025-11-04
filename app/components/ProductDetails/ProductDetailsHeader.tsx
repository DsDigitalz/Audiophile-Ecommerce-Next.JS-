// ProductDetailsHeader.tsx
import React from "react";
import Image from "next/image";

const ORANGE_ACCENT = "#D87D4A";

// Define the shape of the data this component expects
interface ProductDetailsProps {
  product: {
    name: string;
    price: number;
    description: string;
    imageSrc: string;
    isNew: boolean;
  };
}

const ProductDetailsHeader: React.FC<ProductDetailsProps> = ({ product }) => {
  // Helper to format price to US Dollars
  const formattedPrice = `$ ${product.price.toLocaleString()}`;

  return (
    // Semantic markup container (animation removed)
    <section
      aria-label={`Details for ${product.name}`}
      className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-24"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-32">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center p-8 lg:p-16">
          <Image
            src={product.imageSrc}
            alt={product.name}
            width={540}
            height={560}
            priority // Load the main product image quickly
            className="object-contain w-full h-full max-h-[350px] lg:max-h-[560px]"
          />
        </div>

        {/* Text/Details Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          {/* "NEW PRODUCT" Label (Dynamic) */}
          {product.isNew && (
            <p
              style={{ color: ORANGE_ACCENT }}
              className="text-sm tracking-[10px] uppercase mb-4"
            >
              NEW PRODUCT
            </p>
          )}

          {/* Product Title (Dynamic) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight mb-6 text-black">
            {product.name}
          </h1>

          {/* Product Description (Dynamic) */}
          <p className="text-base text-gray-500 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Price (Dynamic) */}
          <p className="text-xl font-bold mb-8">{formattedPrice}</p>

          {/* Add to Cart / Quantity Selector */}
          <div className="flex items-center space-x-4">
            {/* Quantity Selector Component */}
            <div className="flex items-center bg-gray-200 text-black font-bold">
              <button className="px-4 py-3 opacity-25 hover:opacity-100 transition-opacity">
                -
              </button>
              <span className="px-4 py-3">1</span>
              <button className="px-4 py-3 opacity-25 hover:opacity-100 transition-opacity">
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              style={{ backgroundColor: ORANGE_ACCENT }}
              className="text-white text-sm font-semibold uppercase px-6 py-3 tracking-widest hover:opacity-75 transition-opacity"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsHeader;

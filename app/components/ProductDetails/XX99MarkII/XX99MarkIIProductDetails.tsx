// ProductDetailHeader.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";

// Re-using the global constants for consistency
const ORANGE_ACCENT = "#D87D4A";
// const LIGHT_BG = "#F1F1F1";

const XX99MarkIIProductDetails = () => {
  // Product data for the XX99 Mark II
  const product = {
    name: "XX99 Mark II Headphones",
    price: 2999,
    isNew: true,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    imageSrc: "/headphonesimg.png", // Placeholder path
    altText: "XX99 Mark II Headphones product view",
  };

  return (
    // Outer container for overall page structure and max width
    <section
      className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8 md:py-12 lg:py-20"
      aria-label={`${product.name} Details`}
    >
      {/* 1. Go Back Link */}
      <div className="mb-6 md:mb-8">
        <Link
          href="/headphones"
          className="text-gray-500 hover:text-gray-900 transition-colors text-base"
        >
          Go Back
        </Link>
      </div>

      {/* 2. Product Detail Block (Image and Info) */}
      <div className="flex flex-col md:flex-row items-center justify-start gap-8 lg:gap-24">
        {/* Left Section: Product Image */}
        {/* Uses the light gray background consistent with category cards */}
        <div className="w-full md:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center p-8 md:p-12 lg:p-20">
          <Image
            src={product.imageSrc}
            alt={product.altText}
            width={540}
            height={560}
            // Ensures the image scales down without being cropped
            className="object-contain w-full h-full max-h-[350px] md:max-h-[450px]"
          />
        </div>

        {/* Right Section: Text Content and Buy Controls */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          {/* "NEW PRODUCT" Label */}
          {product.isNew && (
            <p
              style={{ color: ORANGE_ACCENT }}
              className="text-sm tracking-[10px] uppercase mb-4"
            >
              NEW PRODUCT
            </p>
          )}

          {/* Product Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight mb-6 text-black">
            {product.name}
          </h1>

          {/* Product Description */}
          <p className="text-base text-gray-500 max-w-md leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Price */}
          <p className="text-xl font-bold tracking-wide mb-8 text-black">
            $ {product.price.toLocaleString()}
          </p>

          {/* Add to Cart Controls (Quantity + Button) */}
          <div className="flex items-center space-x-4">
            {/* Quantity Selector (Styled for pixel-perfection) */}
            <div className="flex items-center bg-gray-100 rounded-none text-black font-bold">
              <button
                aria-label="Decrease quantity"
                className="p-3 w-10 text-xl text-gray-500 hover:text-black transition-colors"
              >
                -
              </button>
              <span className="p-3 w-10 text-center text-sm">1</span>
              <button
                aria-label="Increase quantity"
                className="p-3 w-10 text-xl text-gray-500 hover:text-black transition-colors"
              >
                +
              </button>
            </div>

            {/* ADD TO CART Button */}
            <button
              style={{ backgroundColor: ORANGE_ACCENT }}
              className="text-white text-sm font-semibold uppercase px-8 py-3 tracking-widest hover:opacity-75 transition-opacity"
              role="button"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XX99MarkIIProductDetails;

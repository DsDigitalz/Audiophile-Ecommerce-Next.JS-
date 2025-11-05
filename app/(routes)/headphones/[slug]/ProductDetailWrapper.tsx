"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/lib/store/cartStore"; // Import your cart store
import AboutUsSection from "@/app/components/LandingPage/AboutUsSection";
import CategoryCards from "@/app/components/LandingPage/CategoryCards";

// --- UI CONSTANTS ---
const ORANGE_ACCENT = "#D87D4A";
const LIGHT_GRAY_BG = "#F1F1F1";

// --- INTERFACES (Matching your provided data structure) ---
interface ProductData {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  features: string;
  secondaryFeatures: string;
  inTheBox: { quantity: number; item: string }[];
  imageSrc: string;
  altText: string;
  color: string;
  newProduct: boolean;
}

interface SuggestedProduct {
  name: string;
  imageSrc: string;
  href: string;
}

interface ProductDetailWrapperProps {
  product: ProductData;
  suggestedProducts: SuggestedProduct[];
  // You would pass other derived props like galleryImages here too
  galleryImages: { image1: string; image2: string; image3: string };
  isImageRight: boolean;
}

// --- SUB-COMPONENTS (for clarity and re-use) ---

// Suggested Product Card
const SuggestedProductCard: React.FC<SuggestedProduct> = ({
  name,
  imageSrc,
  href,
}) => {
  return (
    <div className="flex flex-col items-center text-center" role="article">
      <div className="w-full h-[120px] md:h-[200px] lg:h-[350px] bg-[#F1F1F1] rounded-lg flex items-center justify-center mb-8">
        <Image
          src={imageSrc}
          alt={name}
          width={220}
          height={220}
          className="object-contain w-full h-full max-h-[200px]"
        />
      </div>
      <h3 className="text-lg md:text-xl font-bold uppercase mb-8 text-black ">
        {name}
      </h3>
      <Link
        href={href}
        style={{ backgroundColor: ORANGE_ACCENT }}
        className="inline-block hover:opacity-75 transition-opacity text-white text-sm font-semibold uppercase px-8 py-4 tracking-widest"
      >
        See Product
      </Link>
    </div>
  );
};

// --- MAIN CLIENT COMPONENT ---

const ProductDetailWrapper: React.FC<ProductDetailWrapperProps> = ({
  product,
  suggestedProducts,
  galleryImages,
  isImageRight,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem, openModal } = useCartStore();

  const flexOrderClasses = isImageRight ? "md:flex-row" : "md:flex-row-reverse";

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: "/assets/cart/image-xx99-mark-ii.jpg",
      },
      quantity
    );
    openModal();
    setQuantity(1);
  };

  return (
    <main className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8 md:py-12 lg:py-20">
      {/* 1. Go Back Link */}
      <div className="mb-6 md:mb-8">
        <Link
          href={`/${product.category.toLowerCase()}`}
          className="text-gray-500 hover:text-gray-900 transition-colors text-base"
        >
          Go Back
        </Link>
      </div>

      {/* 🎧 PRODUCT DETAIL SECTION */}
      <section
        className={`max-w-[1440px] mx-auto flex flex-col ${flexOrderClasses} items-center justify-between gap-10 md:gap-16 lg:gap-[125px] mb-[120px] lg:mb-40`}
        aria-label={`Details for ${product.name}`}
      >
        {/* Product Image Panel */}
        <div
          className="w-full md:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center p-8 md:p-12 lg:p-20"
          style={{ backgroundColor: LIGHT_GRAY_BG }}
        >
          <Image
            src={product.imageSrc}
            alt={product.altText}
            width={540}
            height={560}
            className="object-contain w-full h-full max-h-[450px]"
          />
        </div>

        {/* Text Content and Controls */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          {product.newProduct && (
            <p
              style={{ color: ORANGE_ACCENT }}
              className="text-sm tracking-[10px] uppercase mb-4"
            >
              New Product
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight mb-6 text-black w-80">
            {product.name}
          </h1>
          <p className="text-base text-gray-500 max-w-md leading-relaxed mb-8">
            {product.description}
          </p>
          <p className="text-xl font-bold tracking-wide mb-8 text-black">
            $ {product.price.toLocaleString()}
          </p>

          {/* Add to Cart Controls */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-none text-black font-bold">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="p-3 w-10 text-xl text-gray-500 hover:text-black transition-colors"
              >
                -
              </button>
              <span className="p-3 w-10 text-center text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="p-3 w-10 text-xl text-gray-500 hover:text-black transition-colors"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              style={{ backgroundColor: ORANGE_ACCENT }}
              className="text-white text-sm font-semibold uppercase px-8 py-3 tracking-widest hover:opacity-75 transition-opacity cursor-pointer"
              role="button"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </section>

      {/* --- YOU MAY ALSO LIKE --- */}
      <section
        className="max-w-[1440px] mx-auto py-16 md:py-24"
        aria-label="You May Also Like"
      >
        <h2 className="text-center text-3xl sm:text-4xl font-bold uppercase mb-12 md:mb-16 text-black">
          YOU MAY ALSO LIKE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-4 lg:gap-x-8">
          {suggestedProducts.map((product, index) => (
            <SuggestedProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* --- GLOBAL COMPONENTS --- */}
      <CategoryCards />
      <AboutUsSection />
    </main>
  );
};

export default ProductDetailWrapper;

// XX99MarkIIFeature.tsx
import Link from "next/link";
// import Image from "next/image";
import React from "react";

// Re-using the global constant for consistency
const ORANGE_ACCENT = "#D87D4A";

const XX99MarkIFeature = () => {
  return (
    // Max width container for overall page alignment, centered, with padding
    <section
      className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-10"
      aria-label="XX99 Mark II Headphones Feature"
    >
      {/* Main Container - Responsive layout: Image on left, Text on right (default) */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-24">
        {/* Left Section: Product Image */}
        {/* The image is contained within a rounded, light gray background. */}
        <div className="w-full md:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center p-8 md:p-12 lg:p-20">
          <img
            src="headphonesimg.png" // Replace with your actual image path
            alt="XX99 Mark II Headphones"
            width={540} // Optimized for desktop, object-contain will scale
            height={560} // Adjusted height to match aspect ratio
            className="object-contain w-full h-full max-h-[350px] md:max-h-[450px]"
          />
        </div>

        {/* Right Section: Text Content and Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Product Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight mb-6 text-black">
            XX99 Mark I <br /> HEADPHONES
          </h2>

          {/* Product Description */}
          <p className="text-base text-gray-500 max-w-md leading-relaxed mb-8">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>

          {/* "SEE PRODUCT" Button */}
          <Link
            href="/product/xx99-mark-ii-headphones" // Example link
            style={{ backgroundColor: ORANGE_ACCENT }}
            className="inline-block hover:bg-[#FBAF85] transition-opacity text-white text-sm font-semibold uppercase px-8 py-4 tracking-widest"
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default XX99MarkIFeature;

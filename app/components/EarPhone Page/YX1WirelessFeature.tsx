// XX99MarkIIFeature.tsx
import Image from "next/image";
import Link from "next/link";
// import Image from "next/image";
import React from "react";

// Re-using the global constant for consistency
const ORANGE_ACCENT = "#D87D4A";

const YX1WirelessFeature = () => {
  return (
    // Max width container for overall page alignment, centered, with padding
    <section
      className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:pb-20"
      aria-label="XX59 Mark II Headphones Feature"
    >
      {/* Main Container - Responsive layout: Image on left, Text on right (default) */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Left Section: Product Image */}
        {/* The image is contained within a rounded, light gray background. */}
        <div className="w-full md:w-1/2 bg-[#F1F1F1] rounded-lg flex items-center justify-center p-8 md:p-12 lg:p-20">
          <Image
            src="/earphoneimg.png" // Replace with your actual image path
            alt="YX1 Wireless Earphones"
            width={540} // Optimized for desktop, object-contain will scale
            height={560} // Adjusted height to match aspect ratio
            className="object-contain w-full h-full max-h-[350px] md:max-h-[450px]"
          />
        </div>

        {/* Right Section: Text Content and Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          {/* "NEW PRODUCT" Label */}
          <p
            style={{ color: ORANGE_ACCENT }}
            className="text-sm tracking-[10px] uppercase mb-4"
          >
            New Product
          </p>

          {/* Product Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight mb-6 text-black">
            YX1 WIRELESS
            <br /> EARPHONES
          </h2>

          {/* Product Description */}
          <p className="text-base text-gray-500 max-w-md leading-relaxed mb-8">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>

          {/* "SEE PRODUCT" Button */}
          <Link
            href="/earphones/yx1" // Example link
            // style={{ backgroundColor: ORANGE_ACCENT }}
            className="inline-block bg-[#D87D4A] hover:bg-[#FBAF85] transition-opacity text-white text-sm font-semibold uppercase px-8 py-4 tracking-widest"
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default YX1WirelessFeature;

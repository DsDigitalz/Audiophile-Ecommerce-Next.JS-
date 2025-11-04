// YX1EarphonesAd.tsx
import Link from 'next/link';
import React from 'react';

const YX1EarphonesAd = () => {
  return (
    // Max width container for overall page alignment
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8" aria-label="YX1 Earphones Promotion">
      
      {/* Main Container - Rounded corners applied here */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-8">
        
        {/* Left Section: Product Image */}
        {/* This div is set to take half the width on medium screens and above */}
        <div 
          // Semantic Markup: using 'figure' for image content
          className="w-full md:w-1/2 h-80 rounded-lg overflow-hidden bg-gray-500"
        >
          {/* We use an image tag for better semantics and a specific aspect ratio/crop for the design */}
          <img
            // Replace with the actual image path
            src="earphone.jpg" 
            alt="YX1 Wireless Earphones in charging case"
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Right Section: Text and Button */}
        {/* This div is set to take the other half of the width, with a distinct light background color */}
        <div className="w-full md:w-1/2 h-80 bg-[#F1F1F1] rounded-lg flex flex-col justify-center items-start p-6 sm:p-12 lg:p-24">
          
          {/* Product Title */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wider mb-8 uppercase text-black">
            YX1 EARPHONES
          </h2>
          
          {/* Action Button */}
          <Link href="/earphones/yx1"
            // Pixel-perfect button styling: thin black border, transparent background
            className="border border-black text-black text-sm uppercase px-8 py-3 tracking-widest bg-transparent hover:bg-black hover:text-white transition-colors duration-300"
            // Semantic Markup: using 'button'
            role="button"
          >
            SEE PRODUCT
          </Link>
        </div>

      </div>
    </section>
  );
};

export default YX1EarphonesAd;
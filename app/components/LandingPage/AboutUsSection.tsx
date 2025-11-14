// AboutUsSection.tsx
// import Image from 'next/image';
import React from 'react';

const AboutUsSection: React.FC = () => {
  // Define custom colors if they aren't in your config (e.g., the orange accent)
  const orangeAccent = '#D87D4A';

  return (
    // Max width container for overall page alignment, centered, with padding
    <section 
      className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 pt-10 pb-24 lg:py-40" 
      aria-label="About Audiophile Store"
    >
      
      {/* Main Container - Reverse the order on desktop (image on right) */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24">
        
        {/* Left Section: Text Content (Order 2 on mobile, Order 1 on desktop) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          
          {/* Title with Orange Accent */}
          <h2 className="text-[32px] sm:text-5xl font-bold tracking-tight mb-8 uppercase text-black max-w-lg">
            BRINGING YOU THE <br />
            <span style={{ color: orangeAccent }}>BEST</span> AUDIO GEAR
          </h2>
          
          {/* Body Paragraph */}
          <p className="text-base text-gray-500 max-w-md leading-relaxed">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        {/* Right Section: Image (Order 1 on mobile, Order 2 on desktop) */}
        <div 
          className="w-full lg:w-1/2 rounded-lg overflow-hidden order-1 lg:order-2"
        >
          <img
            // Replace with the actual image path
            src="/aboutimg.png" 
            alt="Man listening to headphones in a modern room"
            // Use object-cover to ensure the image fills the rounded container cleanly
            className="w-full h-full object-cover" 
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
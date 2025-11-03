// ZX9SpeakerHero.tsx
import React from 'react';

const ZX9SpeakerHero= () => {
  return (
    // Max width container for overall page alignment, padding for vertical spacing
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8 lg:py-10" aria-label="ZX9 Speaker Hero Section">
      
      {/* Main Container - Custom Orange Background & Rounded Corners */}
      {/* We are approximating the custom orange color here as bg-orange-700, 
         you may need to add the exact hex code to your tailwind.config.js for perfect color matching. */}
      <div className="bg-[#D87D4A] rounded-lg overflow-hidden relative flex flex-col lg:flex-row items-center justify-center pt-12 pb-12 lg:pt-0 lg:pb-0">
        
        {/* Decorative Background Circles (Implemented via a large background image or custom CSS) */}
        {/* For a true pixel-perfect implementation, these are often a combination of:
           1. An image set as the background on the container, or
           2. Absolute positioned pseudo-elements/divs with opacity/blending.
           
           We'll use a single div with a background image style for simplicity and accuracy.
        */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{ 
            backgroundImage: "radial-gradient(circle, #FFAF85 1%, transparent 60%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "200% 200%", // Ensures large, overlapping circles
            backgroundPosition: "center left -10%",
          }}
          aria-hidden="true"
        />

        {/* Left Section: Speaker Image (Mobile: Full Width, Desktop: Offset to the Left) */}
        {/* The speaker is large and partially off-screen/off-container, achieved with negative margins and absolute positioning */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative z-10 lg:-mb-10 lg:-ml-12">
          <img
            // Replace with the actual image path (desktop version)
            src="speaker1.png" 
            alt="ZX9 Large Speaker"
            // Adjust w-auto and max-w-sm/md/lg to control size across viewports
            className="w-auto h-auto max-w-[15rem] sm:max-w-sm md:max-w-md lg:max-w-none lg:w-full lg:h-[450px] object-contain" 
          />
        </div>
        
        {/* Right Section: Text and Button (Moves to the right on desktop) */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center items-center lg:items-start text-white text-center lg:text-left z-10 space-y-6">
          
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider uppercase leading-none">
            ZX9 <br /> SPEAKER
          </h2>
          
          {/* Description */}
          <p className="text-base text-white/75 max-w-xs leading-relaxed">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          
          {/* Action Button */}
          <a href="/product/zx9-speaker">
            <button
              // Pixel-perfect button styling: solid black background, white text
              className="bg-black text-white text-sm uppercase px-8 py-3 tracking-widest hover:bg-[#4C4C4C] transition-colors duration-200 mt-6"
              role="button"
            >
              SEE PRODUCT
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ZX9SpeakerHero;
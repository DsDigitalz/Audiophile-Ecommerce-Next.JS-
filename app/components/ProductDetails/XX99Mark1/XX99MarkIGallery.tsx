// ProductGallery.tsx
import React from "react";
import Image from "next/image";

const XX99MarkIGallery = () => {
  // Placeholder image paths for the XX99 Mark II Headphones
  const galleryImages = {
    image1: "/XX99Mark1gallery1.png", // Top-left small image
    image2: "/XX99Mark1gallery2.png", // Bottom-left small image
    image3: "/XX99Mark1gallery3.png", // Right large image
  };

  return (
    // Max width container for overall page alignment, centered, with padding
    <section
      className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-24"
      aria-label="Product Image Gallery"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
        {/* Left Column: Two Stacked Images (Responsive) */}
        <div className="flex flex-col gap-5 md:gap-7">
          <div className="w-full h-[174px] md:h-[290px] lg:h-[280px] rounded-lg overflow-hidden">
            <Image
              src={galleryImages.image1}
              alt="Man listening to XX99 Mark II Headphones"
              width={300} // Actual image size will be much larger, these are just for aspect ratio
              height={280}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[174px] md:h-[290px] lg:h-[280px] rounded-lg overflow-hidden">
            <Image
              src={galleryImages.image2}
              alt="XX99 Mark II Headphones on a table with a magazine"
              width={300}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Single Large Image (Responsive) */}
        <div className="w-full h-[368px] md:h-[592px] lg:h-[580px] rounded-lg overflow-hidden">
          <Image
            src={galleryImages.image3}
            alt="Close-up of XX99 Mark II Headphones"
            width={635} // Actual image size
            height={592}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default XX99MarkIGallery;

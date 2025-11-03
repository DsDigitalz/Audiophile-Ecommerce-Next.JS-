// YouMayAlsoLike.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Re-using the global constant for consistency
const ORANGE_ACCENT = "#D87D4A";

// Interface for individual suggested product data
interface SuggestedProductProps {
  name: string;
  imageSrc: string;
  href: string; // The link to the suggested product's page
}

const SuggestedProductCard: React.FC<SuggestedProductProps> = ({
  name,
  imageSrc,
  href,
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Image Container with light gray background */}
      <div className="w-full h-[120px] md:h-[200px]  lg:h-[350px] bg-[#F1F1F1] rounded-lg flex items-center justify-center mb-8">
        <Image
          src={imageSrc}
          alt={name}
          width={220} // Generous width for object-contain to scale
          height={220} // Generous height
          className="object-contain w-full h-full max-h-[120px] md:max-h-[160px] lg:max-h-[200px]"
        />
      </div>

      {/* Product Name */}
      <h3 className="text-lg md:text-xl font-bold uppercase mb-8 text-black">
        {name}
      </h3>

      {/* See Product Button */}
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

const XX99MarkIILikes = () => {
  // Data for suggested products (replace with actual data from your backend)
  const suggestedProducts = [
    {
      name: "XX99 MARK I",
      imageSrc: "/categoryimg1.png", // Placeholder image
      href: "/headphones/xx99-mark-one-headphones", // Example link
    },
    {
      name: "XX59",
      imageSrc: "/categoryimg2.png", // Placeholder image
      href: "/headphones/xx59-headphones", // Example link
    },
    {
      name: "ZX9 SPEAKER",
      imageSrc: "/categoryimg3.png", // Placeholder image
      href: "/speakers/zx9-speaker", // Example link
    },
  ];

  return (
    // Max width container for overall page alignment, centered, with padding
    <section
      className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-24"
      aria-label="You May Also Like"
    >
      <h2 className="text-center text-3xl sm:text-4xl font-bold uppercase mb-12 md:mb-16 text-black">
        YOU MAY ALSO LIKE
      </h2>

      {/* Grid for suggested products (3 columns on desktop, 1 on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-4 lg:gap-x-8">
        {suggestedProducts.map((product, index) => (
          <SuggestedProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default XX99MarkIILikes;

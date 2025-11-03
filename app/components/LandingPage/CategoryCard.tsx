// CategoryCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface CategoryCardProps {
  imageSrc: string;
  altText: string;
  categoryName: string;
  href: string;
}

const CategoryCard = ({ imageSrc, altText, categoryName, href }: CategoryCardProps) => {
  return (
    // Semantic Markup: Using a Link wrapper for the clickable card.
    <Link 
      href={href} 
      // The background color is a very light gray (#F1F1F1 is common, using Tailwind's gray-100)
      className="flex flex-col items-center p-6 pt-20 rounded-lg bg-gray-100 group relative"
      role="region" // Semantic role for the card area
      aria-label={`${categoryName} Category`}
    >
      
      {/* Image Container - ABSOLUTE POSITIONING for the Overlap Effect */}
      {/* Adjust the -top value to move the image up and out of the card.
          The width and height are set for the image's container. */}
      <div className="absolute -top-12 md:-top-16 w-32 h-32 md:w-40 md:h-40 flex items-end justify-center">
        {/* <img src="oval.png" alt="" className=''/> */}
        <Image
          src={imageSrc}
          alt={altText}
          width={220} // Use a generous size for high resolution, let object-contain handle the rest
          height={220} 
          // No animation applied (removed group-hover:scale-105 transition)
          className="object-contain w-full h-full"
          priority={false}
        />
      </div>

      {/* Placeholder Images Removed. The single Image component above handles the visual. */}

      {/* Text Content */}
      <h3 className="text-lg md:text-xl font-bold uppercase mt-12 mb-2 tracking-wide text-gray-800">
        {categoryName}
      </h3>
      
      {/* SHOP link with small arrow */}
      <div className="flex items-center gap-2 text-sm font-bold uppercase text-gray-500 hover:text-[#D87D4A] transition-colors">
        <span>Shop</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          // Orange color for the arrow
          stroke="#D87D4A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          // Removed hover animation (group-hover:translate-x-1)
          className="w-4 h-4"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </Link>
  );
};

export default CategoryCard;
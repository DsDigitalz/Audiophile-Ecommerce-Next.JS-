// CategoryCards.tsx (Main component to render all cards)
import React from "react";
import CategoryCard from "./CategoryCard"; // Assuming you separate the files

const categoryData = [
  {
    imageSrc: "/categoryimg1.png",
    altText: "Headphones Category",
    categoryName: "Headphones",
    href: "/headphones",
  },
  {
    imageSrc: "/categoryimg2.png",
    altText: "Speakers Category",
    categoryName: "Speakers",
    href: "/speakers",
  },
  {
    imageSrc: "/categoryimg3.png",
    altText: "Earphones Category",
    categoryName: "Earphones",
    href: "/earphones",
  },
];

const CategoryCards = () => {
  return (
    // Semantic Markup: Using <section> for this block of related content.
    <section
      className=" max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-30 md:py-40 lg:pb-20"
      aria-label="Product Categories"
    >
      <div
        className=" mx-auto 
                   grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4 lg:gap-8"
      >
        {categoryData.map((category) => (
          <CategoryCard
            key={category.categoryName}
            imageSrc={category.imageSrc}
            altText={category.altText}
            categoryName={category.categoryName}
            href={category.href}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;

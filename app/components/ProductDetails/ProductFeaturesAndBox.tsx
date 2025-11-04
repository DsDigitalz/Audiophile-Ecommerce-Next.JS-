// ProductFeaturesAndBox.tsx
import React from "react";

// Define the shape of the data this component expects
interface InTheBoxItem {
  quantity: string;
  item: string;
}

interface ProductFeaturesProps {
  features: {
    paragraph1: string;
    paragraph2: string;
  };
  inTheBox: InTheBoxItem[];
}

const ProductFeaturesAndBox: React.FC<ProductFeaturesProps> = ({
  features,
  inTheBox,
}) => {
  return (
    // Semantic markup: section for features and box contents
    <section
      aria-label="Product Features and In The Box"
      className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16"
    >
      <div className="flex flex-col lg:flex-row gap-20">
        {/* 1. FEATURES COLUMN */}
        <div className="lg:w-3/5">
          <h2 className="text-3xl font-bold uppercase mb-8">FEATURES</h2>
          <div className="space-y-6 text-gray-500">
            <p>{features.paragraph1}</p>
            <p>{features.paragraph2}</p>
          </div>
        </div>

        {/* 2. IN THE BOX COLUMN */}
        <div className="lg:w-2/5 flex flex-col md:flex-row lg:flex-col justify-between">
          <h2 className="text-3xl font-bold uppercase mb-8 md:mb-0 lg:mb-8">
            IN THE BOX
          </h2>
          <ul className="space-y-2">
            {inTheBox.map((boxItem, index) => (
              <li key={index} className="flex items-center">
                {/* Quantity - styled with orange accent */}
                <span
                  className="font-bold text-base mr-6"
                  style={{ color: "#D87D4A" }}
                >
                  {boxItem.quantity}
                </span>
                {/* Item Name */}
                <span className="text-gray-500 text-base">{boxItem.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductFeaturesAndBox;

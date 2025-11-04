// ProductFeaturesAndBox.tsx
import React from "react";

// Re-using the global constant for consistency
const ORANGE_ACCENT = "#D87D4A";

const XX99MarkIProductFeatures = () => {
  // Data placeholders for the XX99 Mark II
  const featuresContent = {
    paragraph1:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz..",
    paragraph2:
      "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector..",
  };

  const inTheBoxItems = [
    { quantity: "1x", item: "Headphone Unit" },
    { quantity: "2x", item: "Replacement Earcups" },
    { quantity: "1x", item: "User Manual" },
    { quantity: "1x", item: "3.5mm 5m Audio Cable" }, // Note: Corrected typo from screenshot to common length
    
  ];

  return (
    // Max width container for overall page alignment, centered, with padding
    <section
      className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-24"
      aria-label="Product Features and Contents"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32">
        {/* LEFT SECTION: FEATURES */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-8 text-black">
            FEATURES
          </h2>

          <div className="text-base text-gray-500 leading-relaxed space-y-6">
            <p>{featuresContent.paragraph1}</p>
            <p>{featuresContent.paragraph2}</p>
          </div>
        </div>

        {/* RIGHT SECTION: IN THE BOX (Stacked vertically on mobile, separate column on desktop) */}
        <div className="w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col ">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-8 text-black">
            IN THE BOX
          </h2>

          {/* Item List */}
          <ul className="space-y-2" role="list">
            {inTheBoxItems.map((boxItem, index) => (
              <li key={index} className="flex space-x-6">
                {/* Quantity - styled with orange for emphasis */}
                <span
                  style={{ color: ORANGE_ACCENT }}
                  className="text-base font-bold"
                >
                  {boxItem.quantity}
                </span>
                {/* Item Name - styled with gray for secondary text */}
                <span className="text-base text-gray-500 font-medium">
                  {boxItem.item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default XX99MarkIProductFeatures;

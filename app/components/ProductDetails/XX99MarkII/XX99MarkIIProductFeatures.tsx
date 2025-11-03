// ProductFeaturesAndBox.tsx
import React from "react";

// Re-using the global constant for consistency
const ORANGE_ACCENT = "#D87D4A";

const XX99MarkIIProductFeaturesAndBox = () => {
  // Data placeholders for the XX99 Mark II
  const featuresContent = {
    paragraph1:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
    paragraph2:
      "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
  };

  const inTheBoxItems = [
    { quantity: "1x", item: "Headphone Unit" },
    { quantity: "2x", item: "Replacement Earcups" },
    { quantity: "1x", item: "User Manual" },
    { quantity: "1x", item: "3.5mm 5m Audio Cable" }, // Note: Corrected typo from screenshot to common length
    { quantity: "1x", item: "Travel Bag" },
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

export default XX99MarkIIProductFeaturesAndBox;

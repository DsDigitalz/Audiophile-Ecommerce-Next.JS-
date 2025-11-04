import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";

// --- UI CONSTANTS ---
const ORANGE_ACCENT = "#D87D4A";
const LIGHT_GRAY_BG = "#F1F1F1";

// --- CLIENT COMPONENT PLACEHOLDER ---
// Ensure you have this file: /app/components/QuantityControl.tsx
import { QuantityControl } from "@/app/components/QuantityControl";
import Image from "next/image";
import AboutUsSection from "@/app/components/LandingPage/AboutUsSection";
import CategoryCards from "@/app/components/LandingPage/CategoryCards";

// --- MOCK DATA (Consolidated for page functionality) ---

const products = [
  // ... (Your complete products array remains the same for functionality)
  // I am omitting the data here for brevity, but assume the full array from your input is used.
  {
    id: "xx99-mark-ii",
    name: "XX99 MARK II",
    category: "HEADPHONES",
    price: 2999,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
    secondaryFeatures:
      "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm Audio Cable" },
      { quantity: 1, item: "Travel Bag" },
    ],
    imageSrc: "/headphonesimg.png",
    altText: "XX99 Mark II Headphones product view",
    color: "black",
    newProduct: true,
  },
  {
    id: "xx99-mark-i",
    name: "XX99 MARK I",
    category: "HEADPHONES",
    price: 1750,
    description: "...",
    features: "...",
    secondaryFeatures: "...",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm Audio Cable" },
    ],
    imageSrc: "/xx99-mark-i.jpg",
    color: "black-gold",
    newProduct: false,
  },
  {
    id: "xx59-mark-i",
    name: "XX59",
    category: "HEADPHONES",
    price: 899,
    description: "...",
    features: "...",
    secondaryFeatures: "...",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "Charging Cable" },
    ],
    imageSrc: "/xx59.jpg",
    altText: "",
    color: "gray",
    newProduct: false,
  },
];

const relatedProducts = [
  { id: "xx99-mark-ii", name: "XX99 MARK II", image: "/xx99-mark-ii.jpg" },
  { id: "xx99-mark-i", name: "XX99 MARK I", image: "/xx99-mark-i.jpg" },
  { id: "xx59", name: "XX59", image: "/xx59.jpg" },
  { id: "zx9-speaker", name: "ZX9 SPEAKER", image: "/zx9.jpg" },
  { id: "zx7-speaker", name: "ZX7 SPEAKER", image: "/zx7.jpg" },
  { id: "yx1-earphones", name: "YX1 EARPHONES", image: "/yx1.jpg" },
];
// --- END MOCK DATA ---

interface HeadPhonePageProps {
  params: {
    slug: string;
  };
}

const HeadPhonePage = async ({ params }: HeadPhonePageProps) => {
  const { slug } = await params;

  const product = products.find((p) => p.id === slug);

  if (!product) {
    return notFound();
  }

  const otherProducts = relatedProducts
    .filter((p) => p.id !== slug)
    .slice(0, 3);

  const index = products.findIndex((p) => p.id === slug);
  const isImageRight = index % 2 !== 0;
  const flexOrderClasses = isImageRight ? "md:flex-row-reverse" : "md:flex-row";

  // GALLERY

  const galleryImages = {
    image1: "/XX99MarkIIgallery1.png", // Top-left small image
    image2: "/XX99MarkIIgallery2.png", // Bottom-left small image
    image3: "/XX99MarkIIgallery3.png", // Right large image
  };

  // LIkES

  // YouMayAlsoLike.tsx

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
    <main className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8 md:py-12 lg:py-20">
      {/* 1. Go Back Link */}
      <div className="mb-6 md:mb-8">
        <Link
          href="/headphones"
          className="text-gray-500 hover:text-gray-900 transition-colors text-base"
        >
          Go Back
        </Link>
      </div>

      {/* 🎧 PRODUCT DETAIL SECTION */}
      <section
        className={`max-w-[1440px] mx-auto flex flex-col ${flexOrderClasses} items-center justify-between gap-10 md:gap-16 lg:gap-[125px] mb-[120px] lg:mb-40`}
      >
        {/* Product Image Panel - Uses full width on mobile/tablet */}

        {/* The image sits nicely inside the background container */}
        <div
          className="w-full md:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center p-8 md:p-12 lg:p-20"
          style={{ backgroundColor: LIGHT_GRAY_BG }}
        >
          <Image
            src={product.imageSrc}
            alt={product.altText}
            width={540}
            height={560}
            // Ensures the image scales down without being cropped
            className="object-contain w-full h-full max-h-[350px] md:max-h-[450px]"
          />
        </div>

        {/* Text Content and Controls */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          {/* "NEW PRODUCT" Label */}
          {product.newProduct && (
            <p
              style={{ color: ORANGE_ACCENT }}
              className="text-sm tracking-[10px] uppercase mb-4"
            >
              New Product
            </p>
          )}

          {/* Product Title - Correct font size and tight leading match the screenshot */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight mb-6 text-black">
            {product.name}
          </h1>

          {/* Product Description */}
          <p className="text-base text-gray-500 max-w-md leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Price - Slightly smaller margin to the controls below */}
          <p className="text-xl font-bold tracking-wide mb-8 text-black">
            $ {product.price.toLocaleString()}
          </p>

          {/* Add to Cart Controls (Quantity + Button) */}
          <div className="flex items-center space-x-4">
            {/* Quantity Selector (Styled for pixel-perfection) */}
            <div className="flex items-center bg-gray-100 rounded-none text-black font-bold">
              <button
                aria-label="Decrease quantity"
                className="p-3 w-10 text-xl text-gray-500 hover:text-black transition-colors"
              >
                -
              </button>
              <span className="p-3 w-10 text-center text-sm">1</span>
              <button
                aria-label="Increase quantity"
                className="p-3 w-10 text-xl text-gray-500 hover:text-black transition-colors"
              >
                +
              </button>
            </div>

            {/* ADD TO CART Button */}
            <button
              style={{ backgroundColor: ORANGE_ACCENT }}
              className="text-white text-sm font-semibold uppercase px-8 py-3 tracking-widest hover:opacity-75 transition-opacity cursor-pointer"
              role="button"
            >
              ADD TO CART
            </button>
          </div>
          {/* Quantity Control (Client Component) - Combined button/control logic */}
          {/* <QuantityControl /> */}
        </div>
      </section>

      {/* --- FEATURES AND IN THE BOX --- */}
      <section className="max-w-[1440px] mx-auto flex flex-col lg:flex-row py-5 md:pb-30 gap-10 lg:gap-60">
        <div className="lg:w-150 lg:col-span-3">
          {" "}
          {/* Features takes up 3/5 columns */}
          {/* LEFT SECTION: FEATURES */}
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-8 text-black">
            FEATURES
          </h2>
          {/* Text is visually one long block of gray text */}
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            {product.features}
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed">
            {product.secondaryFeatures}
          </p>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
          {" "}
          {/* In The Box takes up 2/5 columns */}
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-4 text-black">
            IN THE BOX
          </h2>
          <ul>
            {product.inTheBox.map((item, index) => (
              <li key={index} className="flex gap-6 mb-2">
                <span
                  className="font-bold tracking-wider text-sm" // Smaller text size for items
                  style={{ color: ORANGE_ACCENT }}
                >
                  {item.quantity}x
                </span>
                <span className="text-gray-500 text-sm">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- GALLERY (3-Image Layout) --- */}
      {/* Gallery requires precise padding/sizing for the images to look right */}
      <section
        className="max-w-[1440px] mx-auto  py-16 lg:pb-30"
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

      {/* --- YOU MAY ALSO LIKE --- */}
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
      <CategoryCards />
      <AboutUsSection />
    </main>
  );
};

export default HeadPhonePage;

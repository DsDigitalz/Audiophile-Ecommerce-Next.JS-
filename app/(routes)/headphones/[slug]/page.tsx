"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
// --- Store Import (Used to manage cart and modal visibility) ---
import { useCartStore } from "@/lib/store/cartStore";

// --- UI CONSTANTS ---
const ORANGE_ACCENT = "#D87D4A";
const LIGHT_GRAY_BG = "#F1F1F1";

// --- MOCK DATA (Should be external, but kept here for a single-file solution) ---
const products = [
 
  {
    id: "xx99-mark-ii",
    name: "XX99 MARK II HEADPHONES",
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
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
      { quantity: 1, item: "Travel Bag" },
    ],
    imageSrc: "/headphonesimg.png",
    altText: "XX99 Mark II Headphones product view",
    color: "black",
    newProduct: true,

    // related products
    related: [
      {
        name: "XX99 MARK I",
        imageSrc: "/XX99MarkIimg.png",
        href: "/headphones/xx99-mark-i",
      },
      {
        name: "XX59",
        imageSrc: "/XX59img.png",
        href: "/headphones/xx59",
      },
      {
        name: "ZX9 SPEAKER",
        imageSrc: "/speakersimg1.png",
        href: "/speakers/zx9",
      },
    ]
  },

  {
    id: "xx99-mark-i",
    name: "XX99 MARK I HEADPHONES",
    category: "HEADPHONES",
    price: 1750,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. ",
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz..",
    secondaryFeatures:
      "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector..",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
    ],
    imageSrc: "/XX99MarkIimg.png",
    altText: "XX99 Mark I Headphones product view",
    color: "black-gold",
    newProduct: false,

    // related products
    related:[
      {
        name:"XX99 MARK II",
        imageSrc:"/headphonesimg.png",
        href:"/headphones/xx99-mark-ii"
      },
      {
        name:"XX59",
        imageSrc:"/XX59img.png",
        href:"/headphones/xx59",
      },
      {
        name:"ZX9 SPEAKER",
        imageSrc:"/speakersimg1.png",
        href:"/headphones/zx9",
      }
    ]

  },

  {
    id: "xx59",
    name: "XX59 HEADPHONES",
    category: "HEADPHONES",
    price: 899,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.  ",
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
    secondaryFeatures:
      "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
    ],
    imageSrc: "/XX59img.png",
    altText: " XX59 Headphones product view",
    color: "gray",
    newProduct: false,

    related:[
      {
        name:"XX99 MARK II",
        imageSrc:"/headphonesimg.png",
        href:"/headphones/xx99-mark-ii",
      },
      {
        name:"XX99 MARK I",
        imageSrc:"/XX99MarkIimg.png",
        href:"/headphones/xx99-mark-i",
      },
      {
        name:"ZX9 SPEAKER",
        imageSrc:"/speakersimg1.png",
        href:"/speakers/zx9",
      },
    ]
  },
];

// const relatedProducts = [
//   {
//     name: "XX99 MARK I",
//     imageSrc: "/XX99MarkIimg.png",
//     href: "/headphones/xx99-mark-i",
//   },
//   {
//     name: "XX59",
//     imageSrc: "/XX59img.png",
//     href: "/headphones/xx59",
//   },
//   { name: "ZX9 SPEAKER", imageSrc: "/speakersimg1.png", href: "/speakers/zx9" },
// ];

// --- END MOCK DATA ---

// --- SUB-COMPONENT: SuggestedProductCard ---

interface SuggestedProductProps {
  name: string;
  imageSrc: string;
  href: string;
}

const SuggestedProductCard: React.FC<SuggestedProductProps> = ({
  name,
  imageSrc,
  href,
}) => {
  return (
    <div
      className="flex flex-col items-center text-center"
      role="article" // Semantic markup
    >
      <div className="w-full h-[120px] md:h-[200px] lg:h-[350px] bg-[#F1F1F1] rounded-lg flex items-center justify-center mb-8">
        <Image
          src={imageSrc}
          alt={name}
          width={220}
          height={220}
          className="object-contain w-full h-full max-h-[200px]"
        />
      </div>

      <h3 className="text-lg md:text-xl font-bold uppercase mb-8 text-black ">
        {name}
      </h3>

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

// --- MAIN PAGE COMPONENT ---

const HeadPhonePage = () => {
  // 1. Get the parameters using the official Next.js client hook (Fixes the param access error)
  const routeParams = useParams();
  const slug = routeParams.slug as string;

  // --- Data Fetching (client-side mock data lookup) ---
  const product = products.find((p) => p.id === slug);

  if (!product) {
    return notFound();
  }

  // --- State and Handlers ---
  const [quantity, setQuantity] = useState(1);
  // Destructure the necessary state action to open the modal
  const { addItem, openModal } = useCartStore();

  const handleAddToCart = () => {
    // 1. Add the item to the global cart store
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.imageSrc, // Image is used in the modal
      },
      quantity
    );

    // 2. 💥 CRUCIAL STEP: Open the cart modal 💥
    openModal();

    // 3. Reset quantity
    setQuantity(1);
  };

  // --- UI/Layout Variables ---
  const index = products.findIndex((p) => p.id === slug);
  const isImageRight = index % 2 !== 0;
  const flexOrderClasses = isImageRight ?  "md:flex-row" : "md:flex-row";

  const galleryImages = {
    image1: "/XX59gallery1.png",
    image2: "/XX59gallery2.png",
    image3: "/XX59gallery3.png",
  };

  // 🚨 CORRECT RETURN for the main component 🚨
  return (
    <main className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8 md:py-12 lg:py-20">
      {/* 1. Go Back Link */}
      <div className="mb-6 md:mb-8">
        <Link
          href={`/${product.category.toLowerCase()}`}
          className="text-gray-500 hover:text-gray-900 transition-colors text-base"
        >
          Go Back
        </Link>
      </div>

      {/* --- 🎧 PRODUCT DETAIL SECTION (Semantic markup for the container) --- */}
      <section
        className={`max-w-[1440px] mx-auto flex flex-col ${flexOrderClasses} items-center justify-between gap-10 md:gap-16 lg:gap-[125px] mb-20 lg:mb-40`}
        aria-label={`Details for ${product.name}`}
      >
        {/* Product Image Panel */}
        <div
          className="w-full md:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center p-8 md:p-12 lg:p-20"
          style={{ backgroundColor: LIGHT_GRAY_BG }}
        >
          <Image
            src={product.imageSrc}
            alt={product.altText}
            width={540}
            height={560}
            className="object-contain w-full h-full max-h-[450px]"
          />
        </div>

        {/* Text Content and Controls */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          {product.newProduct && (
            <p
              style={{ color: ORANGE_ACCENT }}
              className="text-sm tracking-[10px] uppercase mb-4"
            >
              New Product
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight mb-6 text-black w-80">
            {product.name}
          </h1>
          <p className="text-base text-gray-500 max-w-md leading-relaxed mb-8">
            {product.description}
          </p>
          <p className="text-xl font-bold tracking-wide mb-8 text-black">
            $ {product.price.toLocaleString()}
          </p>

          {/* Add to Cart Controls (Quantity + Button) */}
          <div className="flex items-center space-x-4">
            {/* Quantity Selector */}
            <div className="flex items-center bg-gray-100 rounded-none text-black font-bold">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="p-3 w-10 text-xl text-gray-500 hover:text-black transition-colors"
              >
                -
              </button>
              <span className="p-3 w-10 text-center text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="p-3 w-10 text-xl text-gray-500 hover:text-black transition-colors"
              >
                +
              </button>
            </div>

            {/* ADD TO CART Button - Wires up the handler */}
            <button
              onClick={handleAddToCart}
              style={{ backgroundColor: ORANGE_ACCENT }}
              className="text-white text-sm font-semibold uppercase px-8 py-3 tracking-widest hover:opacity-75 transition-opacity cursor-pointer"
              role="button"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </section>

      {/* --- FEATURES AND IN THE BOX --- */}
      <section
        className="max-w-[1440px] mx-auto flex flex-col lg:flex-row py-5 md:pb-30 gap-10 lg:gap-60"
        aria-label="Features and included items"
      >
        <div className="lg:w-150 lg:col-span-3">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-8 text-black">
            FEATURES
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            {product.features}
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed">
            {product.secondaryFeatures}
          </p>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-4 text-black">
            IN THE BOX
          </h2>
          <ul>
            {product.inTheBox.map((item, index) => (
              <li key={index} className="flex gap-6 mb-2">
                <span
                  className="font-bold tracking-wider text-sm"
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
      <section
        className="max-w-[1440px] mx-auto py-16 lg:pb-30"
        aria-label="Product Image Gallery"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          <div className="flex flex-col gap-5 md:gap-7">
            <div className="w-full h-[174px] md:h-[290px] lg:h-[280px] rounded-lg overflow-hidden">
              <Image
                src={galleryImages.image1}
                alt="Gallery image 1"
                width={300}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[174px] md:h-[290px] lg:h-[280px] rounded-lg overflow-hidden">
              <Image
                src={galleryImages.image2}
                alt="Gallery image 2"
                width={300}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full h-[368px] md:h-[592px] lg:h-[580px] rounded-lg overflow-hidden">
            <Image
              src={galleryImages.image3}
              alt="Gallery image 3"
              width={635}
              height={592}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- YOU MAY ALSO LIKE --- */}
     <section
  className="max-w-[1440px] mx-auto py-16 md:py-24"
  aria-label="You May Also Like"
>
  <h2 className="text-center text-3xl sm:text-4xl font-bold uppercase mb-12 md:mb-16 text-black">
    YOU MAY ALSO LIKE
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-4 lg:gap-x-8">
    {product.related.map((p, index) => (
      <SuggestedProductCard key={index} {...p} />
    ))}
  </div>
</section>

    </main>
  );
};

export default HeadPhonePage;

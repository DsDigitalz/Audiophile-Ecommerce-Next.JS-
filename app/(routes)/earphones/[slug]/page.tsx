"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useCartStore } from "@/lib/store/cartStore";
import AboutUsSection from "@/app/components/LandingPage/AboutUsSection";
import CategoryCards from "@/app/components/LandingPage/CategoryCards";
// import { QuantityControl } from "@/app/components/QuantityControl";

const ORANGE_ACCENT = "#D87D4A";
const LIGHT_GRAY_BG = "#F1F1F1";

const products = [
  {
    id: "yx1",
    name: "YX1 WIRELESS EARPHONES",
    category: "EARPHONES",
    price: 599,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
    secondaryFeatures:
      "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    inTheBox: [
      { quantity: 2, item: "Earphone Unit" },
      { quantity: 6, item: "Multi-size Earplugs" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "USB-C Charging Cable" },
      { quantity: 1, item: "Travel Pouch" },
    ],
    imageSrc: "/earphoneimg.png",
    altText: "YX1 Earphones product view",
    color: "black",
    newProduct: true,
  },
];

const suggestedProducts = [
  {
    name: "XX99 MARK I",
    imageSrc: "/categoryimg1.png",
    href: "/headphones/xx99-mark-i",
  },
  {
    name: "XX59",
    imageSrc: "/XX59img.png",
    href: "/headphones/xx59",
  },
  {
    name: "ZX9 SPEAKER",
    imageSrc: "/ZX9img.png",
    href: "/speakers/zx9-speaker",
  },
];

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
    <div className="flex flex-col items-center text-center">
      <div className="w-full h-[120px] md:h-[200px] lg:h-[350px] bg-[#F1F1F1] rounded-lg flex items-center justify-center mb-8">
        <Image
          src={imageSrc}
          alt={name}
          width={220}
          height={220}
          className="object-contain w-full h-full max-h-[120px] md:max-h-40 lg:max-h-[200px]"
        />
      </div>
      <h3 className="text-lg md:text-xl font-bold uppercase mb-8 text-black">
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

export default function EarPhonePage() {
  const { slug } = useParams();
  const product = products.find((p) => p.id === slug);

  if (!product) return notFound();

  const [quantity, setQuantity] = useState(1);
  const { addItem, openModal } = useCartStore();

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.imageSrc,
      },
      quantity
    );
    openModal();
    setQuantity(1);
  };

  const galleryImages = {
    image1: "/YX1gallery1.png",
    image2: "/YX1gallery2.png",
    image3: "/YX1gallery3.png",
  };

  const flexOrderClasses = "md:flex-row";

  return (
    <main className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8 md:py-12 lg:py-20">
      {/* Go Back */}
      <div className="mb-6 md:mb-8">
        <Link
          href="/earphones"
          className="text-gray-500 hover:text-gray-900 transition-colors text-base"
        >
          Go Back
        </Link>
      </div>

      {/* PRODUCT SECTION */}
      <section
        className={`max-w-[1440px] mx-auto flex flex-col ${flexOrderClasses} items-center justify-between gap-10 md:gap-16 lg:gap-[125px] mb-20 lg:mb-40`}
      >
        <div
          className="w-full md:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center p-8 md:p-12 lg:p-20"
          style={{ backgroundColor: LIGHT_GRAY_BG }}
        >
          <Image
            src={product.imageSrc}
            alt={product.altText}
            width={540}
            height={560}
            className="object-contain w-full h-full max-h-[350px] md:max-h-[450px]"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          {product.newProduct && (
            <p
              style={{ color: ORANGE_ACCENT }}
              className="text-sm tracking-[10px] uppercase mb-4"
            >
              New Product
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight mb-6 text-black">
            {product.name}
          </h1>
          <p className="text-base text-gray-500 max-w-md leading-relaxed mb-8">
            {product.description}
          </p>
          <p className="text-xl font-bold tracking-wide mb-8 text-black">
            $ {product.price.toLocaleString()}
          </p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 text-black font-bold">
              <button
                aria-label="Decrease quantity"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 w-10 text-xl text-gray-500 hover:text-black transition-colors"
              >
                -
              </button>
              <span className="p-3 w-10 text-center text-sm">{quantity}</span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 w-10 text-xl text-gray-500 hover:text-black transition-colors"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              style={{ backgroundColor: ORANGE_ACCENT }}
              className="text-white text-sm font-semibold uppercase px-8 py-3 tracking-widest hover:opacity-75 transition-opacity cursor-pointer"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-[1440px] mx-auto flex flex-col lg:flex-row py-5 md:pb-30 gap-10 lg:gap-60">
        <div className="lg:w-150">
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

      {/* GALLERY */}
      <section
        className="max-w-[1440px] mx-auto py-16"
        aria-label="Product Image Gallery"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          <div className="flex flex-col gap-5 md:gap-7">
            <div className="w-full h-[174px] md:h-[290px] rounded-lg overflow-hidden">
              <Image
                src={galleryImages.image1}
                alt="Gallery image 1"
                width={300}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[174px] md:h-[290px] rounded-lg overflow-hidden">
              <Image
                src={galleryImages.image2}
                alt="Gallery image 2"
                width={300}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full h-[368px] md:h-[592px] rounded-lg overflow-hidden">
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

      {/* YOU MAY ALSO LIKE */}
      <section
        className="max-w-[1440px] mx-auto py-16 md:py-24"
        aria-label="You May Also Like"
      >
        <h2 className="text-center text-3xl sm:text-4xl font-bold uppercase mb-12 md:mb-16 text-black">
          YOU MAY ALSO LIKE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-4 lg:gap-x-8">
          {suggestedProducts.map((p, i) => (
            <SuggestedProductCard key={i} {...p} />
          ))}
        </div>
      </section>

      <CategoryCards />
      <AboutUsSection />
    </main>
  );
}

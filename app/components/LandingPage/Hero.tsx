import Link from "next/link";
import React from "react";

const Hero = () => {
//   const ORANGE_ACCENT = "#D87D4A";

  return (
    <section
      className="relative w-full h-[600px] md:h-[729px] lg:h-screen bg-black text-white overflow-hidden"
      aria-label="XX99 Mark II Headphones New Product Hero"
    >
      {/* Background Image */}
      <div
        className="absolute -top-10 -left-108 sm:-left-110 md:-left-130 lg:left-0 inset-0 bg-black"
        style={{
          backgroundImage: 'url("/Heroimg.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // Centered on small screens, slightly shifted for desktop
          backgroundPosition: "center -40px", // tweak this offset for best centering
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 lg:items-start lg:text-left">
        <p className="text-white/50 text-sm tracking-[10px] uppercase mb-4">
          New Product
        </p>

        <h1 className="text-[40px] sm:text-5xl md:text-6xl font-bold uppercase leading-tight mb-6">
          XX99 Mark II <br className="hidden md:block" /> HEADPHONES
        </h1>

        <p className="text-white/75 text-base mb-8 max-w-xs md:max-w-sm">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <Link
          href="/headphones/xx99-mark-ii"
        //   style={{ backgroundColor: ORANGE_ACCENT }}
          className="inline-block bg-[#D87D4A] hover:bg-[#FBAF85] transition-opacity text-white text-sm font-semibold uppercase px-8 py-4 tracking-widest"
        >
          See Product
        </Link>
      </div>

      {/* Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10 z-30" />
    </section>
  );
};

export default Hero;

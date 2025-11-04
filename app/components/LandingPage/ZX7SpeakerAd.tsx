import Link from "next/link";
import React from "react";

const ZX7SpeakerAd = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20  md:pt-10">
      <div
        className="relative rounded-lg overflow-hidden  md:bg-contain md:bg-no-repeat md:bg-center h-[327px] md:h-[400px] lg:h-[500px] flex items-center"
        style={{
          backgroundImage: "url('/ZXimg.png')", // <-- your background image here
        }}
      >
        {/* Content Overlay */}
        <div className="ml-8 sm:ml-12 md:ml-20 z-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wider mb-3 md:mb-8 uppercase text-black">
            ZX7 SPEAKER
          </h2>
          <Link href="/speakers/zx7" className="border-2 border-black text-black text-sm uppercase px-8 py-3 tracking-widest hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
            See Product
          </Link>
        </div>

        {/* Optional subtle overlay to darken or tint */}
        {/* <div className="absolute inset-0 bg-black/10"></div> */}
      </div>
    </section>
  );
};

export default ZX7SpeakerAd;

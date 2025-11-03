import AboutUsSection from "@/app/components/LandingPage/AboutUsSection";
import CategoryCards from "@/app/components/LandingPage/CategoryCards";
import HeroBanner2 from "@/app/components/SpeakersPage/HeroBanner2";
import ZX7Speaker from "@/app/components/SpeakersPage/ZX7Speaker";
import ZX9Speaker from "@/app/components/SpeakersPage/ZX9Speaker";
import React from "react";

export default function page() {
  return (
    <main>
      <HeroBanner2 />
      <ZX9Speaker />
      <ZX7Speaker />
      <CategoryCards />
      <AboutUsSection />
    </main>
  );
}

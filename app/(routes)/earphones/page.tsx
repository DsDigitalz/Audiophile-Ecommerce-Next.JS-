import HeroBanner3 from "@/app/components/EarPhone Page/HeroBanner3";
import YX1WirelessFeature from "@/app/components/EarPhone Page/YX1WirelessFeature";
import AboutUsSection from "@/app/components/LandingPage/AboutUsSection";
import CategoryCards from "@/app/components/LandingPage/CategoryCards";
import React from "react";

export default function page() {
  return (
    <main>
      <HeroBanner3 />
      <YX1WirelessFeature />
      <CategoryCards />
      <AboutUsSection />
    </main>
  );
}

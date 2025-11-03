import React from "react";
import AboutUsSection from "../components/LandingPage/AboutUsSection";
import Hero from "../components/LandingPage/Hero";
import CategoryCards from "../components/LandingPage/CategoryCards";
import ProductHighlightCard from "../components/LandingPage/ProductHighlightCard";
import YX1EarphonesAd from "../components/LandingPage/YX1EarphonesAd";
import ZX7SpeakerAd from "../components/LandingPage/ZX7SpeakerAd";
// import ZX9SpeakerHero from "../components/LandingPage/ZX9SpeakerHero";

export default function page() {
  return (
    <main>
      <Hero />
      <CategoryCards />
      <ProductHighlightCard />
      {/* <ZX9SpeakerHero /> */}
      <ZX7SpeakerAd />
      <YX1EarphonesAd />
      <AboutUsSection />
    </main>
  );
}

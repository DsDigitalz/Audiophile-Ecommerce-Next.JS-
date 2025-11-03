import HeroBanner from "@/app/components/HeadPhone Page/HeroBanner";
import XX99MarkIIFeature from "@/app/components/HeadPhone Page/XX99MarkIIFeature";
import XX99MarkIFeature from "@/app/components/HeadPhone Page/XX99MarkIFeature";
import React from "react";
import XX59MarkIFeature from "@/app/components/HeadPhone Page/XX59MarkIFeature";
import CategoryCards from "@/app/components/LandingPage/CategoryCards";
import AboutUsSection from "@/app/components/LandingPage/AboutUsSection";

export default function page() {
  return (
    <main>
      <HeroBanner />
      <XX99MarkIIFeature />
      <XX99MarkIFeature />
      <XX59MarkIFeature />
      <CategoryCards />
      <AboutUsSection />
    </main>
  );
}

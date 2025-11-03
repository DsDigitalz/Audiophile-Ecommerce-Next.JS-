import AboutUsSection from "@/app/components/LandingPage/AboutUsSection";
import CategoryCards from "@/app/components/LandingPage/CategoryCards";
import XX99MarkIIGallery from "@/app/components/ProductDetails/XX99MarkII/XX99MarkIIGallery";
import XX99MarkIILikes from "@/app/components/ProductDetails/XX99MarkII/XX99MarkIILikes";
import XX99MarkIIProductDetails from "@/app/components/ProductDetails/XX99MarkII/XX99MarkIIProductDetails";
import XX99MarkIIProductFeatures from "@/app/components/ProductDetails/XX99MarkII/XX99MarkIIProductFeatures";

import React from "react";

export default function page() {
  return (
    <main>
      <XX99MarkIIProductDetails />
      <XX99MarkIIProductFeatures />
      <XX99MarkIIGallery />
      <XX99MarkIILikes />
      <CategoryCards />
      <AboutUsSection />
    </main>
  );
}

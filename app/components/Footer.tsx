// Footer.tsx
import Link from "next/link";
import React from "react";
// Framer Motion imports have been removed.
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";

// --- Types ---
interface NavLink {
  label: string;
  href: string;
}

// --- Data ---
const navLinks: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "HEADPHONES", href: "/headphones" },
  { label: "SPEAKERS", href: "/speakers" },
  { label: "EARPHONES", href: "/earphones" },
];

const socialLinks = [
  { icon: FaFacebookSquare, href: "#", label: "Facebook" },
  { icon: FaTwitterSquare, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

// --- Component ---
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Replaced motion.footer with standard footer tag
    <footer
      // Semantic Markup: using 'footer'
      className="bg-black text-white relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 relative pt-12">
        {/* Top Orange Line (Design Feature) */}
        {/* The width is adjusted to match the full viewport and stretch out to the max-w-7xl content area */}
        <div className="absolute top-0 md:left-32 left-1/2 -translate-x-1/2 h-1 bg-[#D87D4A] w-[101px] max-w-[89rem] lg:max-w-[89rem] z-10" />

        {/* Main Content Area */}
        {/* Flex layout for desktop split, using a large padding-top to account for the top bar space */}
        <div className="flex flex-col lg:flex-row justify-between pt-8 pb-12">
          {/* Left Column: Logo & Text */}
          <section className="flex flex-col lg:w-1/2 mb-10 lg:mb-0">
            {/* Logo - The navigation is moved here for better mobile flow but will be visually reordered on desktop */}

            <Link
              href="/"
              className="text-2xl font-bold text-white tracking-widest mb-10 mr-auto lg:mr-0"
            >
              {/* Using a <strong> tag for semantic logo emphasis */}
              <img src="logo.svg" alt="" />
            </Link>

            {/* Navigation (Positioned visually top-right in original design) */}
            <nav
              className="mb-10 order-1 lg:order-2 lg:absolute lg:right-20"
              aria-label="Footer Navigation"
            >
              <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 lg:space-x-10">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm tracking-widest font-bold uppercase hover:text-[#D87D4A] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Description Text */}
            <p className="text-sm text-[#ffffff78] max-w-md leading-relaxed order-3">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
          </section>

          {/* Right Column/Bottom Section: Social Icons and Copyright split */}
          <div className="flex flex-col justify-end items-start lg:items-end mt-10 lg:mt-0 lg:w-1/2">
            {/* Social Icons (Moved to the bottom right for desktop alignment) */}
            <div className="flex space-x-4 mb-4 lg:absolute lg:bottom-[90px] lg:right-20">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-white hover:text-[#D87D4A] transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>

            {/* The copyright text is now positioned below the text content on mobile */}
          </div>
        </div>

        {/* Copyright Section (Always at the absolute bottom of the container) */}
        <div className="pb-12 pt-4">
          {/* Copyright Notice - Semantic Markup: Using 'small' for fine print */}
          <small className="text-sm text-[#ffffff78]">
            Copyright 2021. All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

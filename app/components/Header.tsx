// File: Header.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
// Removed: import { motion } from 'framer-motion';

// --- Icon components (Simplified for example) ---
// In a real project, you'd use icons from a library like lucide-react or react-icons
const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white hover:text-orange-300 transition-colors"
    aria-label="Shopping Cart"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white lg:hidden"
    aria-label="Menu"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// --- Component Data ---

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "HOME" },
  { href: "/headphones", label: "HEADPHONES" },
  { href: "/speakers", label: "SPEAKERS" },
  { href: "/earphones", label: "EARPHONES" },
];

// Removed: Framer Motion variant object

// --- Component ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use the <header> semantic tag for the main container
  return (
    <header className="sticky top-0 z-50 bg-[#101010]">
      <div className="container mx-auto px-6 lg:px-20 border-b border-gray-700/50">
        <nav
          // Use the <nav> semantic tag for navigation links
          className="flex items-center justify-between h-24"
          aria-label="Main Navigation"
        >
          {/* Hamburger Menu Icon (Mobile Only) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <MenuIcon />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white tracking-widest uppercase mr-auto lg:mr-0"
          >
            {/* Using a <strong> tag for semantic logo emphasis */}
           <img src="logo.svg" alt="" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:ml-auto lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] font-semibold text-white tracking-widest hover:text-orange-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart Icon */}
          <Link
            href="/checkout"
            className="ml-auto lg:ml-8"
            aria-label="View Shopping Cart"
          >
            <CartIcon />
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-24 left-0 w-full bg-[#101010]shadow-lg p-6"
        >
          {/* Use the <ul> and <li> semantic tags for a list of links */}
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-medium text-white hover:text-orange-400 py-2 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

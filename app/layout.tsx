import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartModal from "./components/Cart/CartModal";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

// app/layout.tsx
// ... (imports) ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        {/* 🚨 CartModal is correctly placed here 🚨 */}
        <CartModal />
        <Footer />
      </body>
    </html>
  );
}

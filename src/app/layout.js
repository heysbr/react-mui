import "./globals.css";

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter", // optional CSS variable
});


// app/layout.tsx or app/layout.js
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit", // optional CSS variable
});

export const metadata = {
  title: "My App",
  description: "A Next.js app using Outfit font",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body>{children}</body>
    </html>
  );
}

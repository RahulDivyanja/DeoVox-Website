import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Optional: Using Inter font for a clean, modern look
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deo Vox | Global Trade Excellence",
  description: "Building the most resilient multi-sectoral trade system in the region, positioning Deo Vox as an indispensable engine of the international supply chain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
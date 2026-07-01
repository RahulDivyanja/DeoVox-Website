import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "@/src/components/WhatsAppButton";

// Optional: Using Inter font for a clean, modern look
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Deo Vox",
    default: "Deo Vox | Global Trade & Logistics Excellence",
  },
  description: "Positioning Deo Vox as an indispensable engine of the international supply chain and your main trade representative to the world.",
  keywords: [
    "Global Trading",
    "Supply Chain Management",
    "UAE Logistics",
    "Sri Lanka Trade Hub",
    "Freight Forwarding",
    "General Trading UAE",
    "Sourcing Agent",
    "Commodity Trading",
    "Ocean Freight",
    "Air Cargo",
    "Customs Brokerage",
    "Container Shipping",
    "Resilient Supply Chain"
  ],
  openGraph: {
    title: "Deo Vox | Global Trade Excellence",
    description: "A world-class leader in global trading and supply chain management solutions.",
    url: "https://www.deovoxglobal.com",
    siteName: "Deo Vox",
    images: [
      {
        url: "https://www.deovoxglobal.com/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deo Vox Global Trade & Logistics Excellence"
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={inter.className}>
        {children}
        <Toaster position="top-right" containerClassName="react-hot-toast-container" toastOptions={{ duration: 4000 }} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
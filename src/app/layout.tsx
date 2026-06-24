import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "@/src/components/WhatsAppButton";

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
        <Toaster position="top-right" containerClassName="react-hot-toast-container" toastOptions={{ duration: 4000 }} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
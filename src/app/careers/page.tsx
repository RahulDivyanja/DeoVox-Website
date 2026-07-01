import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Deo Vox and build the future of international supply chain and global trade operations. Explore careers in operations, administration, technology, and sales.",
};

export default function CareersPage() {
  return <CareersClient />;
}

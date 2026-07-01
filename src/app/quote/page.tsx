import type { Metadata } from "next";
import QuoteClient from "./QuoteClient";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Request a custom trade or logistics quote from Deo Vox. Provide your cargo details and destination for a tailored supply chain solution.",
};

export default function QuotePage() {
  return <QuoteClient />;
}

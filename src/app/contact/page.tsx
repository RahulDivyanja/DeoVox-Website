import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Deo Vox global trade and logistics experts. Contact our headquarters in Sharjah, UAE or our regional hub in Colombo, Sri Lanka.",
};

export default function ContactPage() {
  return <ContactClient />;
}

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CoreServices from '../components/CoreServices';
import WhyDeoVox from '../components/WhyDeoVox';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* The rest of the page components will go here later */}
      <CoreServices />
      <WhyDeoVox />
      <ContactSection />
      <Footer overlap={true} />
    </main>
  );
}
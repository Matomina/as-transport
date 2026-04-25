import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import StickyMobileCta from "./components/layout/StickyMobileCta";
import HeroSection from "./components/sections/HeroSection";
import TrustBar from "./components/sections/TrustBar";
import AvailabilityBanner from "./components/sections/AvailabilityBanner";
import ServicesSection from "./components/sections/ServicesSection";
import StepsSection from "./components/sections/StepsSection";
import RealisationsSection from "./components/sections/RealisationsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import PricingSection from "./components/sections/PricingSection";
import PaymentSection from "./components/sections/PaymentSection";
import FaqSection from "./components/sections/FaqSection";
import FinalCtaSection from "./components/sections/FinalCtaSection";
import ContactSection from "./components/sections/ContactSection";
import { siteData } from "./data/siteData";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    company,
    navLinks,
    header,
    hero,
    footer,
    contactForm,
    contactSection,
    paymentSection,
    finalCtaSection,
    trustItems,
    availabilityBanner,
    services,
    steps,
    reassuranceItems,
    testimonialsSection,
    testimonials,
    packages,
    faqItems,
  } = siteData;

  return (
    <div className="min-h-screen bg-[#062f2b] pb-24 text-white selection:bg-[#ff5a2a] selection:text-white md:pb-0">
      <Header
        navLinks={navLinks}
        header={header}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        company={company}
      />

      <main id="top">
        <HeroSection hero={hero} company={company} />

        <TrustBar items={trustItems} />

        <AvailabilityBanner
          availabilityBanner={availabilityBanner}
          company={company}
        />

        <ServicesSection services={services} />

        <StepsSection steps={steps} />

        <RealisationsSection reassuranceItems={reassuranceItems} />

        <TestimonialsSection
          testimonialsSection={testimonialsSection}
          testimonials={testimonials}
        />

        <PricingSection packages={packages} />

        <PaymentSection paymentSection={paymentSection} company={company} />

        <FaqSection faqItems={faqItems} />

        <FinalCtaSection
          company={company}
          finalCtaSection={finalCtaSection}
        />

        <ContactSection
          company={company}
          contactForm={contactForm}
          contactSection={contactSection}
        />
      </main>

      <Footer company={company} navLinks={navLinks} footer={footer} />

      <a
        href={company.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Contacter AS Transports sur WhatsApp"
        className="fixed bottom-4 right-4 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:scale-105 active:scale-95 md:flex"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="h-6 w-6"
        />
      </a>

      <StickyMobileCta company={company} />
    </div>
  );
}
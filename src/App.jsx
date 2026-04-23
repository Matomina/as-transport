import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import TopPopup from "./components/sections/TopPopup";
import HeroSection from "./components/sections/HeroSection";
import TrustBar from "./components/sections/TrustBar";
import ServicesSection from "./components/sections/ServicesSection";
import StepsSection from "./components/sections/StepsSection";
import RealisationsSection from "./components/sections/RealisationsSection";
import PricingSection from "./components/sections/PricingSection";
import PaymentSection from "./components/sections/PaymentSection";
import FaqSection from "./components/sections/FaqSection";
import ContactSection from "./components/sections/ContactSection";
import FinalCtaSection from "./components/sections/FinalCtaSection";
import { siteData } from "./data/siteData";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopPopup, setShowTopPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTopPopup(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const {
    company,
    navLinks,
    header,
    hero,
    footer,
    contactForm,
    contactSection,
    trustItems,
    services,
    steps,
    reassuranceItems,
    packages,
    faqItems,
  } = siteData;

  return (
    <>
      <TopPopup
        showTopPopup={showTopPopup}
        setShowTopPopup={setShowTopPopup}
        phoneHref={company.phoneHref}
        phone={company.phone}
      />

      <div className="min-h-screen bg-[#062f2b] text-white selection:bg-[#ff5a2a] selection:text-white">
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
          <ServicesSection services={services} />
          <StepsSection steps={steps} />
          <RealisationsSection reassuranceItems={reassuranceItems} />
          <PricingSection packages={packages} />
          <PaymentSection />
          <FaqSection faqItems={faqItems} />
          <ContactSection
            company={company}
            contactForm={contactForm}
            contactSection={contactSection}
          />
          <FinalCtaSection company={company} />
        </main>

        <Footer company={company} navLinks={navLinks} footer={footer} />

        <a
          href={company.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Contacter AS Transports sur WhatsApp"
          className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:scale-105 active:scale-95"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="h-6 w-6"
          />
        </a>
      </div>
    </>
  );
}
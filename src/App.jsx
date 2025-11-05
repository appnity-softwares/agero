import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MarqueeSection from "./components/MarqueeSection.jsx";
import StackScroll from "./components/StackScroll.jsx";
import LetsConnect from "./components/LetsConnect.jsx";
import About from "./components/About.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import AwardsWinning from "./components/AwardsWinning.jsx";
import PricingSection from "./components/PricingSection.jsx";
import FAQSection from "./components/FAQSection.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MarqueeSection />
      <About />
      <TestimonialsSection />
      <StackScroll />
      <LetsConnect />

      <AwardsWinning />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;

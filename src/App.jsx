import AwardsWinning from './components/AwardsWinning.jsx';
import FAQSection from './components/FAQSection.jsx';
import Hero from './components/Hero.jsx';
import MarqueeSection from './components/MarqueeSection.jsx';
import Navbar from './components/Navbar.jsx';  // ✅ changed NavBar → Navbar
import PricingSection from './components/PricingSection.jsx';
import TestimonialsSection from './components/LetsConnectHeader.jsx';
import About from './components/About.jsx';  // ✅ changed about → About
import StackScroll from './components/StackScroll.jsx';  // ✅ added .jsx and fixed case
import LetsConnect from './components/LetsConnect.jsx';
import Footer from './components/Footer.jsx'; // ✅ changed footer → Footer

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <MarqueeSection /> 
       <StackScroll />
      <LetsConnect/>
      <About/>
      <AwardsWinning/>
      <PricingSection />
      <Footer />
      <FAQSection />
      

     
      <Hero />
      <MarqueeSection />
      <About />
      <TestimonialsSection />
      <LetsConnect />
      <AwardsWinning />
      <PricingSection />
      <Footer />
      <FAQSection />
      <StackScroll />
    </div>
  );
};

export default App;


import AwardsWinning from './components/AwardsWinning.jsx';

import FAQSection from './components/FAQSection.jsx';
import Hero from './components/Hero.jsx'
import MarqueeSection from './components/MarqueeSection.jsx';
import Navbar from './components/NavBar.jsx';
import PricingSection from './components/PricingSection.jsx';

import About from './components/about.jsx';
import StackScroll from "./components/stackscroll";

import LetsConnect from './components/LetsConnect.jsx';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <MarqueeSection />
      <LetsConnect/>
      <About/>
      <AwardsWinning/>
      <PricingSection />
      <FAQSection />
      <StackScroll />

     
    </div>
  );
};

export default App;

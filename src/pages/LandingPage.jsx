import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import MarqueeSection from '../components/MarqueeSection'
import TestimonialsSection from '../components/TestimonialsSection'

import AwardsWinning from '../components/AwardsWinning'
import PricingSection from '../components/PricingSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import LetsConnect from '../components/LetsConnect'


const LandingPage = () => {
  return (
    <div>
        
        <Hero/>
        <MarqueeSection/>
        <TestimonialsSection/>
        <AwardsWinning/>
        <PricingSection/>
        <FAQSection/>
        <LetsConnect/>
        
      
    </div>
  )
}

export default LandingPage

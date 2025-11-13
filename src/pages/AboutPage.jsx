import React from 'react'
import Hero from '../components/Hero'
import MarqueeSection from '../components/MarqueeSection'
import About from '../components/About'
import AwardsWinning from '../components/AwardsWinning'
import FAQSection from '../components/FAQSection'
import LetsConnect from '../components/LetsConnect'
import Foundercard from '../components/FounderCard'

const AboutPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Foundercard />
      <MarqueeSection />
      <AwardsWinning />
      <FAQSection />
      <LetsConnect />

    </div>
  )
}

export default AboutPage

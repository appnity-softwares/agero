import React, { Suspense, lazy } from 'react'
import NavBar from '../components/NavBar.jsx' // Keep visible components eager
import Hero from '../components/Hero.jsx'
import Section2 from '../components/Section2.jsx' // Often visible above fold on large screens
import SEOHead from '../components/SEOHead.jsx'

// Lazy Load components below the fold
const MarqueeSection = lazy(() => import('../components/MarqueeSection.jsx'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection.jsx'));
const StackScroll = lazy(() => import('../components/stackscroll.jsx'));
const AwardsWinning = lazy(() => import('../components/AwardsWinning.jsx'));
const PricingSection = lazy(() => import('../components/PricingSection.jsx'));
const FAQSection = lazy(() => import('../components/FAQSection.jsx'));
const Footer = lazy(() => import('../components/Footer.jsx')); // Note: Footer was imported but not used in JSX previously? keeping import just in case
const LetsConnect = lazy(() => import('../components/LetsConnect.jsx'));
const About = lazy(() => import('../components/About.jsx'));
const ServicesCarousel = lazy(() => import('../components/ServicesCarousel.jsx'));
const FounderCard = lazy(() => import('../components/FounderCard.jsx'));


const LandingPage = () => {
  return (
    <div>
      <SEOHead
        title="Appnity - Premium Software Development & Design Agency | Web, Mobile & SaaS Solutions"
        description="Appnity is a leading software development agency specializing in web development, mobile apps, UI/UX design, and custom SaaS solutions. Transform your ideas into powerful digital products with our expert team."
        keywords="software development, web development, mobile app development, UI/UX design, SaaS solutions, React, Next.js, React Native, custom software, digital agency, Appnity, India"
        path="/"
      />
      <Hero />
      <Section2 />

      {/* Load the rest lazily */}
      <Suspense fallback={<div className="h-screen bg-[#f3f3f3]" />}>
        <MarqueeSection />
        <About />
        <TestimonialsSection />
        <StackScroll />
        <ServicesCarousel />
        <FounderCard />
        <AwardsWinning />
        <PricingSection />
        <FAQSection />
        <LetsConnect />
      </Suspense>

    </div>
  )
}

export default LandingPage

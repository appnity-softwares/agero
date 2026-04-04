import React, { Suspense, lazy, useEffect } from "react";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useSmoothScroll from "./hooks/useSmoothScroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy load pages for performance optimization
const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));
const Works = lazy(() => import("./pages/Works.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));
const BlogPage = lazy(() => import("./pages/BlogPage.jsx"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage.jsx"));
const TeamPage = lazy(() => import("./pages/TeamPage.jsx"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage.jsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.jsx"));

// Loading Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#f3f3f3]">
    <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  useSmoothScroll();

  useEffect(() => {
    // Global AOS initialization
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <Router>
      <NavBar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/works" element={<Works />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;

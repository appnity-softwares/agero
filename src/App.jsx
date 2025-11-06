import React from "react";
import NavBar from "./components/NavBar.jsx";

import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Works from "./pages/Works.jsx";
import Services from "./pages/Services.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";

const App = () => {
  return (
    <div>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/works" element={<Works />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage/>} />
      </Routes>
      <Footer />

      </Router>
      
      
    </div>
  );
};

export default App;

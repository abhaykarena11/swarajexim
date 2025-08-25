import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

// Import all components
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import OurProcess from "./components/OurProcess";
import GlobalReach from "./components/GlobalReach";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/WhatsAppButton";
import QuoteModal from "./components/second/QuoteModal";

// Main App Component
export default function App() {
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    products: useRef(null),
    process: useRef(null),
    "global-reach": useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };

  const handleNavClick = (targetId) => {
    sectionRefs[targetId].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="font-sans bg-white">
        <Routes>
          {/* Main Home Page Route */}
          <Route path="/" element={
            <>
              <Header onNavClick={handleNavClick} />
              <main>
                <div ref={sectionRefs.hero}>
                  <Hero onCTAClick={() => handleNavClick("products")} />
                </div>

                <div ref={sectionRefs.about}>
                  <AboutUs />
                </div>

                <div ref={sectionRefs.products}>
                  <Products />
                </div>

                <div ref={sectionRefs.process}>
                  <OurProcess />
                </div>

                {/* <div ref={sectionRefs["global-reach"]}>
                  <GlobalReach />
                </div> */}

                <Certifications />

                <div ref={sectionRefs.testimonials}>
                  <Testimonials />
                </div>

                <div ref={sectionRefs.contact}>
                  <Contact />
                </div>
              </main>
              <Footer onNavClick={handleNavClick} />
              <ScrollToTop />
            </>
          } />
          
          {/* Quote Page Route */}
          <Route path="/quote/:productName" element={<QuoteModal />} />
          
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

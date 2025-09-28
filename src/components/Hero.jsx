import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Assuming you use lucide-react
import { slides } from "../data/mockData";
const Hero = ({ onCTAClick }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const slideInterval = setInterval(next, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section id="hero" className="relative w-full h-[80vh] sm:h-screen overflow-hidden">
      <div className="relative h-full">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* DIV for the background image ONLY */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${s.img})` }}
            />
            {/* FIX: Added the single, correct overlay back in for readability */}
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 animate-fade-in-down tracking-tighter">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
            {slides[current].subtitle}
          </p>
          <button
            onClick={onCTAClick}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Our Products
          </button>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full text-white transition-colors"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full text-white transition-colors"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === i ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
export default Hero;

import React from "react";
import { certifications } from "../data/mockData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Certifications = () => {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  // Responsive visible items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(2);
      else setVisibleItems(4);
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setIndex((prev) =>
      // Check if the next slide would be the last "page"
      prev >= certifications.length - visibleItems ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      // Check if we are at the beginning
      prev <= 0 ? certifications.length - visibleItems : prev - 1
    );
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-2xl font-semibold text-gray-700 mb-8">
          Associated & Certified With
        </h3>

        <div className="flex items-center justify-center">
          {/* Left button */}
          <button
            onClick={prevSlide}
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-200 transition mr-2 z-10 flex-shrink-0"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          {/* Slider wrapper */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                // This logic moves the whole container by one item's width at a time
                transform: `translateX(-${index * (100 / visibleItems)}%)`,
              }}
            >
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex-shrink-0 p-2" // Use padding for spacing instead of gap
                  // KEY CHANGE: Dynamically set width based on state
                  style={{
                    flexBasis: `${100 / visibleItems}%`,
                  }}
                >
                  <div className="h-32 w-full flex items-center justify-center bg-white rounded-lg shadow-sm">
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="max-h-24 max-w-[80%] object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right button */}
          <button
            onClick={nextSlide}
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-200 transition ml-2 z-10 flex-shrink-0"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Certifications;

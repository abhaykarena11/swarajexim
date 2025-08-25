import React from "react";

const Section = ({ title, subtitle, children, className = "", id }) => (
  <section id={id} className={`py-20 sm:py-28 ${className}`}>
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      </div>
      {children}
    </div>
  </section>
);

export default Section; 
import React from "react";
import Section from "./Section";

const GlobalReach = () => (
  <Section
    id="global-reach"
    title="Our Global Reach"
    subtitle="We proudly export to markets across the globe, building strong partnerships along the way."
  >
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Connecting India to the World
        </h3>
        <p className="text-gray-600 mb-4">
          Our robust logistics network enables us to serve clients in key
          international markets, including:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Middle East (UAE, Saudi Arabia, Qatar)</li>
          <li>Southeast Asia (Singapore, Malaysia)</li>
          <li>Europe (Netherlands, UK, Germany)</li>
          <li>North America (USA, Canada)</li>
        </ul>
      </div>
      <div className="w-full md:w-1/2">
        <svg viewBox="0 0 1000 500" className="w-full h-auto">
          {/* Simplified world map path data */}
          <path
            d="M499.999 499.818c-138.071 0-250-111.929-250-250 0-138.071 111.929-250 250-250 138.071 0 250 111.929 250 250 0 138.071-111.929 250-250 250zM315.797 249.818c0-101.738 82.46-184.198 184.202-184.198s184.201 82.46 184.201 184.198c0 101.738-82.46 184.198-184.201 184.198s-184.202-82.46-184.202-184.198z"
            fill="#D1FAE5"
          />
          <circle cx="500" cy="250" r="10" fill="#10B981" />
          <circle cx="700" cy="200" r="10" fill="#10B981" />
          <circle cx="300" cy="180" r="10" fill="#10B981" />
          <circle cx="650" cy="350" r="10" fill="#10B981" />
        </svg>
      </div>
    </div>
  </Section>
);

export default GlobalReach; 
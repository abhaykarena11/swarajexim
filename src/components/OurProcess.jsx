import React from "react";
import { Tractor, CheckCircle, Package, Ship } from "lucide-react";
import Section from "./Section";
import { processSteps } from "../data/mockData";

const OurProcess = () => {
  const iconMap = {
    Tractor: Tractor,
    CheckCircle: CheckCircle,
    Package: Package,
    Ship: Ship,
  };

  return (
    <Section
      id="process"
      title="Our Export Process"
      subtitle="A transparent and efficient process that guarantees quality and reliability from farm to port."
      className="bg-gray-50"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => {
          const IconComponent = iconMap[step.icon];
          return (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center
                         transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon with hover glow */}
              <div className="text-green-600 mb-4 bg-green-100 p-4 rounded-full transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                <IconComponent size={40} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-green-600">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default OurProcess;

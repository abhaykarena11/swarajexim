import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Section from "./Section";
import { products, pulseCategories, pulseInfo } from "../data/mockData";

const Products = () => {
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleQuoteClick = (product) => {
    // Navigate to the quote page with the product name as a URL parameter
    navigate(`/quote/${encodeURIComponent(product.name)}`);
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <Section
      id="products"
      title="Our Product Range"
      subtitle="We offer a diverse range of high-quality agricultural products, sourced directly from the best farms across India."
    >
      {/* Pulses Categories Section */}
      <div className="mb-1">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Pulses & Legumes</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Explore our comprehensive range of pulses and legumes, carefully categorized for your convenience.
        </p>
        
        <div className="space-y-6">
          {pulseCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600">
                        {category.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{category.name}</h3>
                      <p className="text-gray-600">{category.description}</p>
                      <span className="text-sm text-green-600 font-medium">
                        {category.products.length} varieties available
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    <svg 
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        expandedCategory === category.id ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {expandedCategory === category.id && (
                <div className="border-t bg-gray-50 p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.products.map((product, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="mb-3">
                          <img
                            src={product.image}
                            alt={product.name + " — Indian pulses exporter | Swaraj Exim"}
                            width="300"
                            height="200"
                            loading="lazy"
                            fetchpriority="low"
                            className="w-full h-32 object-cover rounded-lg mb-3"
                            onError={(e) => {
                              e.target.src = "https://placehold.co/300x200/2C5F2D/FFFFFF?text=" + encodeURIComponent(product.name);
                            }}
                          />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">{product.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        <button 
                          onClick={() => handleQuoteClick(product)}
                          className="w-full bg-green-100 text-green-800 font-medium py-2 px-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300 text-sm"
                        >
                          Request Quote
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Nutritional Benefits Section */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Nutritional Benefits</h3>
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            {pulseInfo.nutritionalBenefits}
          </p>
        </div>

        {/* Culinary Uses Section */}
        {/* <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Culinary Inspiration</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pulseInfo.culinaryUses.map((use, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold text-green-600 mb-3">{use.category}</h4>
                <p className="text-gray-700">{use.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Other Products Section */}
      {/* <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Other Agricultural Products</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Beyond pulses, we also offer a variety of premium agricultural products.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {product.description}
                </p>
                <button 
                  onClick={() => handleQuoteClick(product)}
                  className="mt-auto bg-green-100 text-green-800 font-semibold py-2 px-4 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors duration-300"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </Section>
  );
};

export default Products;

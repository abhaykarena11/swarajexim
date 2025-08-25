import React from "react";
import { useNavigate } from "react-router-dom";
import Section from "./Section";
import { products } from "../data/mockData";

const Products = () => {
  const navigate = useNavigate();

  const handleQuoteClick = (product) => {
    // Navigate to the quote page with the product name as a URL parameter
    navigate(`/quote/${encodeURIComponent(product.name)}`);
  };

  return (
    <Section
      id="products"
      title="Our Product Range"
      subtitle="We offer a diverse range of high-quality agricultural products, sourced directly from the best farms across India."
    >
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
    </Section>
  );
};

export default Products;

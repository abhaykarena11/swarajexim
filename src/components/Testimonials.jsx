import React from "react";
import { testimonials } from "../data/mockData";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have
            to say about their experience with Swaraj Exim.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-green-600" />
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Client Info */}
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-green-600 font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
};

export default Testimonials;

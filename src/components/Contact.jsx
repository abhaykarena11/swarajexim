import React from "react";
import Section from "./Section";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_l0quqsf";
    const TEMPLATE_ID = "template_b2l84ar";
    const PUBLIC_KEY = "Ez4gWO0HEH0vTsm2y";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset(); // Clear form after submit
        },
        (error) => {
          alert("❌ Failed to send. Check console.");
          console.error(error);
        }
      );
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a question or ready to place an order? We're here to help."
      className="bg-gray-50"
    >
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name" // matches {{user_name}}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="user_email" // matches {{user_email}}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <input
            type="text"
            name="subject" // matches {{subject}}
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="message" // matches {{message}}
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;

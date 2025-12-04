import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Send, Loader, ArrowLeft } from "lucide-react";
import { pulseCategories } from "../../data/mockData";
import emailjs from "@emailjs/browser";

// This is now a standalone Quote Page component
const QuoteModal = () => {
  const { productName } = useParams();
  const navigate = useNavigate();

  const allProducts = pulseCategories.flatMap(category => category.products);

  const product = allProducts.find(
    (p) => p.name === decodeURIComponent(productName)
  );

  // State to handle submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentDate] = useState(() =>
    new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  // If no product is found, redirect to home
  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  // If no product is selected, show loading
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="animate-spin mx-auto mb-4" size={48} />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_l0quqsf";
    const TEMPLATE_ID = "template_xc77moh";
    const PUBLIC_KEY = "Ez4gWO0HEH0vTsm2y";

    // Debug: Log form data being sent
    const formData = new FormData(e.target);
    console.log("Form data being sent to EmailJS:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Additional debug: Check if hidden fields are present
    console.log("Hidden fields check:");
    console.log(
      "Product name field:",
      e.target.querySelector('input[name="product_name"]')?.value
    );
    console.log(
      "Product field:",
      e.target.querySelector('input[name="product"]')?.value
    );
    console.log(
      "Date field:",
      e.target.querySelector('input[name="date"]')?.value
    );

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          // Reset form but preserve hidden fields
          const form = e.target;
          const productNameField = form.querySelector(
            'input[name="product_name"]'
          );
          const dateField = form.querySelector('input[name="date"]');

          form.reset();

          // Restore hidden field values after reset
          if (productNameField) productNameField.value = product.name;
          if (dateField) dateField.value = currentDate;
        },
        (error) => {
          setIsSubmitting(false);
          alert("❌ Failed to send quote request. Please try again.");
          console.error(error);
        }
      );
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={handleBackToHome}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
          {isSubmitted ? (
            // Success Message View
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-700 mb-6">
                Your quote request for{" "}
                <span className="font-semibold text-green-700">
                  {product?.name || "Unknown Product"}
                </span>{" "}
                has been received. We will get back to you within 24 hours.
              </p>
              <button
                onClick={handleBackToHome}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Back to Home
              </button>
            </div>
          ) : (
            // Form View
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  Request a Quote
                </h2>
                <p className="text-gray-600 mt-2">
                  for{" "}
                  <span className="font-semibold text-green-700">
                    {product?.name || "Unknown Product"}
                  </span>
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Hidden fields for EmailJS */}
                <input
                  type="hidden"
                  name="product_name"
                  value={product?.name || "Unknown Product"}
                />
                <input
                  type="hidden"
                  name="product"
                  value={product?.name || "Unknown Product"}
                />
                <input type="hidden" name="date" value={currentDate} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="quantity"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Quantity (Metric Tons)
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="destination_port"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Destination Port
                    </label>
                    <input
                      type="text"
                      name="destination_port"
                      id="destination_port"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="user_name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-12 rounded-full transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-green-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="animate-spin" size={20} />{" "}
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Submit Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;

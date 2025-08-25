import React from "react";
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";
import { navLinks } from "../data/mockData";

const Footer = ({ onNavClick }) => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">SWARAJ EXIM</h3>
          <p className="text-gray-400">
            Exporting nature's bounty. Building global trust.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigate</h3>
          <ul className="space-y-2">
            {navLinks.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => onNavClick(item.target)}
                  className="text-gray-400 hover:text-white"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start">
              <MapPin className="mr-3 mt-1" />
              <span>123 Agri-Complex, Surat, India</span>
            </li>
            <li className="flex items-center">
              <Mail className="mr-3" />
              <a
                href="mailto:contact@swarajexim.trade"
                className="hover:text-white"
              >
                contact@swarajexim.trade
              </a>
            </li>
            <li className="flex items-center">
              <Phone className="mr-3" />
              <a href="tel:+917874817554" className="hover:text-white">
                +91 78748 17554
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-700 hover:bg-green-600 p-2 rounded-full"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="bg-gray-700 hover:bg-green-600 p-2 rounded-full"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="bg-gray-700 hover:bg-green-600 p-2 rounded-full"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Swaraj Exim. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

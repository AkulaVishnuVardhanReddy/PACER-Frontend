import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* Company Info Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Department of Justice</h2>
            <p className="mt-2 text-sm">
              Ensuring justice for all, maintaining integrity and transparency.
            </p>
          </div>
          
          {/* Links Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-400 text-sm">Home</a></li>
              <li><a href="#" className="hover:text-gray-400 text-sm">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400 text-sm">Services</a></li>
              <li><a href="#" className="hover:text-gray-400 text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-sm flex items-center">
                <FaEnvelope className="mr-2" /> info@justice.gov
              </li>
              <li className="text-sm flex items-center">
                <FaPhone className="mr-2" /> +1 234 567 890
              </li>
              <li className="text-sm flex items-center">
                <FaMapMarkerAlt className="mr-2" /> 123 Justice St, Capital City
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Department of Justice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

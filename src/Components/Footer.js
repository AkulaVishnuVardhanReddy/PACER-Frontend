import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-blue-900 text-gray-300 py-10">
    <div className="container mx-auto px-6 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between">

        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white">Department of Justice</h2>
          <p className="mt-2 text-sm">Ensuring justice for all, maintaining integrity and transparency.</p>
        </div>

        
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {['Home', 'About Us', 'Services', 'Contact'].map((link, idx) => (
              <li key={idx}><a href="#" className="hover:text-gray-400 text-sm">{link}</a></li>
            ))}
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="mt-2 space-y-2">
            {[
              { icon: <FaEnvelope />, text: 'info@justice.gov' },
              { icon: <FaPhone />, text: '+1 234 567 890' },
              { icon: <FaMapMarkerAlt />, text: '123 Justice St, Capital City' }
            ].map(({ icon, text }, idx) => (
              <li key={idx} className="text-sm flex items-center">
                {icon}  {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
          <a key={idx} href="#" className="hover:text-gray-400"><Icon /></a>
        ))}
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Department of Justice. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

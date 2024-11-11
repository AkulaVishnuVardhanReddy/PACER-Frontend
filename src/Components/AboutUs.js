import React from "react";
import { FaBalanceScale, FaGavel, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
          PACER
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
          PACER (Judiciary Information System) is designed to enhance the efficiency and transparency of the judicial system. Our goal is to provide easy access to court cases, allow quick retrieval of past case details, and streamline the management of legal proceedings.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex items-start space-x-4">
            <FaBalanceScale className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mt-2">
                To provide an efficient and transparent judicial process through seamless access to case histories, improved case management, and an intuitive interface for all users including judges, lawyers, and registrars.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaGavel className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Core Values</h2>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li><span className="font-medium">Integrity:</span> Upholding the highest standards of honesty and ethics in case management.</li>
                <li><span className="font-medium">Impartiality:</span> Ensuring unbiased access to legal data for all users.</li>
                <li><span className="font-medium">Accessibility:</span> Making legal case data available to lawyers, judges, and registrars easily.</li>
                <li><span className="font-medium">Transparency:</span> Providing full visibility of case details and judicial proceedings for stakeholders.</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 text-center">Our Commitment</h2>
        <p className="text-lg text-gray-600 leading-relaxed mt-4 mb-8 text-center">
          We are committed to revolutionizing the judicial process with the PACER software. Our system supports easy access to court case details for all authorized users while maintaining the integrity and security of sensitive legal data. We aim to improve efficiency, transparency, and accountability in the judicial system.
        </p>

        <div className="flex items-center justify-center space-x-8 mt-8">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-blue-500" />
            <span className="text-gray-600">+1 (123) 456-7890</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-500" />
            <span className="text-gray-600">info@pacer.gov</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

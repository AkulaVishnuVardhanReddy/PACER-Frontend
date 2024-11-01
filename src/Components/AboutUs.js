import React from "react";
import { FaBalanceScale, FaGavel, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const AboutUs=()=> {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
          Our judiciary system is dedicated to the principles of fairness, equality, and transparency. We ensure that every individual, regardless of background or status, has access to a just and impartial legal process.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex items-start space-x-4">
            <FaBalanceScale className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-600 mt-2">
                To deliver justice swiftly and fairly, creating an environment where every voice is heard and respected.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaGavel className="text-blue-500 text-4xl" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Core Values
              </h2>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li><span className="font-medium">Integrity:</span> Upholding the highest standards of honesty and ethics.</li>
                <li><span className="font-medium">Impartiality:</span> Ensuring unbiased decisions for all cases.</li>
                <li><span className="font-medium">Accessibility:</span> Making justice available to all citizens.</li>
                <li><span className="font-medium">Transparency:</span> Committing to openness in every proceeding.</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 text-center">
          Our Commitment
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mt-4 mb-8 text-center">
          We are dedicated to building trust with the public by constantly improving our processes and embracing technology. Our goal is to ensure that every individual receives the justice they deserve, with efficiency and care.
        </p>

        <div className="flex items-center justify-center space-x-8 mt-8">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-blue-500" />
            <span className="text-gray-600">+1 (123) 456-7890</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-500" />
            <span className="text-gray-600">info@judiciary.gov</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
import React from 'react';
import { FaBalanceScale, FaGavel, FaLandmark } from 'react-icons/fa';

const JudiciaryInfo = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">
          Understanding the Judiciary
        </h1>
        <p className="text-gray-700 text-center mb-6">
          The judiciary is an independent body that interprets and enforces the law, ensuring justice and fairness. It plays a vital role in maintaining the rule of law in a democratic society.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center bg-blue-50 p-4 rounded-lg shadow-sm">
            <FaLandmark className="text-blue-700 text-5xl mb-3" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Judicial System
            </h2>
            <p className="text-gray-600 text-center">
              The structure of courts that ensures the proper delivery of justice through different levels of legal proceedings.
            </p>
          </div>
          <div className="flex flex-col items-center bg-blue-50 p-4 rounded-lg shadow-sm">
            <FaGavel className="text-blue-700 text-5xl mb-3" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Role of Judges
            </h2>
            <p className="text-gray-600 text-center">
              Judges make decisions based on law and evidence, guiding the legal process and delivering verdicts to ensure fairness.
            </p>
          </div>
          <div className="flex flex-col items-center bg-blue-50 p-4 rounded-lg shadow-sm">
            <FaBalanceScale className="text-blue-700 text-5xl mb-3" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Rule of Law
            </h2>
            <p className="text-gray-600 text-center">
              A principle under which all members of a society, including the government, are equally subject to the law.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-blue-800 text-white p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">Mission of the Judiciary</h3>
          <p>
            Our mission is to uphold justice, ensure equal access to the law, and protect the rights and liberties of all individuals. We strive to maintain transparency, integrity, and independence in the judicial process.
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default JudiciaryInfo;
import React from 'react';
import { FaBalanceScale, FaGavel, FaLandmark } from 'react-icons/fa';

const JudiciaryInfo = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">Understanding the Judiciary</h1>
      <p className="text-gray-700 text-center mb-6">
        The judiciary interprets and enforces the law, ensuring justice and fairness in a democratic society.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { icon: FaLandmark, title: "Judicial System", text: "The court structure ensures proper delivery of justice." },
          { icon: FaGavel, title: "Role of Judges", text: "Judges deliver verdicts based on law and evidence." },
          { icon: FaBalanceScale, title: "Rule of Law", text: "All members of society are equally subject to the law." },
        ].map(({ icon: Icon, title, text }, i) => (
          <div key={i} className="flex flex-col items-center bg-blue-50 p-4 rounded-lg shadow-sm">
            <Icon className="text-blue-700 text-5xl mb-3" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{title}</h2>
            <p className="text-gray-600 text-center">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-800 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-2">Mission of the Judiciary</h3>
        <p>Our mission is to uphold justice, ensure equal access to the law, and protect rights with integrity and independence.</p>
      </div>
    </div>
  </div>
);

export default JudiciaryInfo;

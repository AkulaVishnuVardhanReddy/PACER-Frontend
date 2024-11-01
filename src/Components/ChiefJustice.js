import React from 'react';
import { FaBalanceScale, FaUserTie } from 'react-icons/fa';

const ChiefJustice = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">
          Chief Justice & Sitting Judges
        </h1>
        <p className="text-gray-700 text-center mb-6">
          The judiciary is led by the Chief Justice, who plays a pivotal role in upholding justice and the rule of law.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center bg-blue-50 p-4 rounded-lg shadow-sm">
            <FaUserTie className="text-blue-700 text-5xl mb-3" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Chief Justice
            </h2>
            <p className="text-gray-600 text-center">
              The Chief Justice oversees the functioning of the Supreme Court and ensures the efficient administration of justice. They set the agenda for court proceedings and guide the judicial process.
            </p>
          </div>
          <div className="flex flex-col items-center bg-blue-50 p-4 rounded-lg shadow-sm">
            <FaBalanceScale className="text-blue-700 text-5xl mb-3" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Role of Sitting Judges
            </h2>
            <p className="text-gray-600 text-center">
              Sitting judges are responsible for interpreting the law and making judgments on cases brought before the court. They ensure that trials are conducted fairly and impartially.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-blue-800 text-white p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">Judicial Leadership</h3>
          <p>
            The Chief Justice, alongside other sitting judges, works to maintain the integrity of the judiciary. They are tasked with upholding the Constitution and ensuring that justice is delivered without bias.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <h4 className="text-xl font-semibold text-blue-800 mb-2">Judicial Panel</h4>
          <p className="text-gray-700">Meet our dedicated panel of judges:</p>
          <ul className="text-gray-600">
            <li className="mb-2">1. Hon. Chief Justice John Doe</li>
            <li className="mb-2">2. Hon. Justice Jane Smith</li>
            <li className="mb-2">3. Hon. Justice Robert Brown</li>
            <li className="mb-2">4. Hon. Justice Emily Davis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChiefJustice;
import React, { useState } from 'react';
import { apiClient } from "../API/APIClient";
import { ScheduleCourtCaseAPICall } from '../API/RegistrarAPI';

const ScheduleCourtCase = () => {
  const[created,setCreated] = useState(false);
  const [message, setMessage] = useState("");
  
  
  const [formData, setFormData] = useState({
    courtCase: {
      cin: "",
    },
    hearingDate: '',
    adjournmentReason: '',
    proceedingSummary: '',
    nextHearingDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [mainKey, subKey] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [mainKey]: {
          ...prevData[mainKey],
          [subKey]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await ScheduleCourtCaseAPICall(formData);

    if (result) {
      setMessage("Case has been Scheduled!");
      setCreated(true);
    } else {
      setMessage("Case not Scheduled!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Schedule Court Case</h2>

      {/* Two-column grid for specific fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Court Case CIN</label>
          <input
            type="text"
            name="courtCase.cin"
            value={formData.courtCase.cin}
            onChange={handleChange}
            placeholder="Court Case CIN"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Hearing Date</label>
          <input
            type="date"
            name="hearingDate"
            value={formData.hearingDate}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
      </div>

      {/* Single-column layout for remaining fields */}
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Adjournment Reason</label>
          <input
            type="text"
            name="adjournmentReason"
            value={formData.adjournmentReason}
            onChange={handleChange}
            placeholder="Reason for Adjournment"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Proceeding Summary</label>
          <textarea
            name="proceedingSummary"
            value={formData.proceedingSummary}
            onChange={handleChange}
            placeholder="Summary of Proceedings"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm h-24"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Next Hearing Date</label>
          <input
            type="date"
            name="nextHearingDate"
            value={formData.nextHearingDate}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
      </div>

      <button type="submit" className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold p-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 shadow-lg transform transition-all duration-200 hover:scale-105">
        Schedule Court Case
      </button>
      {message && (
        <div
          className={`text-center font-semibold mb-1 mt-4 ${
            created ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
};

export default ScheduleCourtCase;

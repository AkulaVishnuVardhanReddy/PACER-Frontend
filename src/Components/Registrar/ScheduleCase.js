import React, { useState } from 'react';
import { apiClient } from "../API/APIClient";

const ScheduleCourtCase = () => {
  const [formData, setFormData] = useState({
    courtCaseCin: '',
    hearingDate: '',
    adjournmentReason: '',
    proceedingSummary: '',
    nextHearingDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function scheduleCourtCase(formData) {
    try {
      const response = await apiClient.post(
        '/court-cases/schedule',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        }
      );

      if (response.status === 200) {
        console.log('Court case scheduled successfully:', response.data);
      }

      return response.data;
    } catch (error) {
      console.error("Failed to schedule court case:", error);
      return null;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await scheduleCourtCase(formData);

    if (result) {
      console.log("Court case scheduling successful");
    } else {
      console.error("Court case scheduling failed");
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
            name="courtCaseCin"
            value={formData.courtCaseCin}
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
    </form>
  );
};

export default ScheduleCourtCase;

import React, { useState } from 'react';
import { CreateCaseAPICall } from '../API/RegistrarAPI';

const CreateCourtCase = () => {
  const [formData, setFormData] = useState({
    defendentName: '',
    defendentAddress: '',
    crimeType: '',
    crimeDate: '',
    crimeLocation: '',
    arrestingOfficerName: '',
    arrestDate: '',
    startDate: '',
    expectedCompletionDate: '',
    status: '',
    judgeName: '',
    publicProsecutorName: '',
    lawyerName: '',
    courtName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await CreateCaseAPICall(formData);
    if (result) {
      console.log("Court case creation successful");
    } else {
      console.error("Court case creation failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-4 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Create Court Case</h2>
      
      {/* Two-column grid for specific fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Defendant Name</label>
          <input
            type="text"
            name="defendentName"
            value={formData.defendentName}
            onChange={handleChange}
            placeholder="Defendant Name"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Defendant Address</label>
          <input
            type="text"
            name="defendentAddress"
            value={formData.defendentAddress}
            onChange={handleChange}
            placeholder="Defendant Address"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Crime Type</label>
          <input
            type="text"
            name="crimeType"
            value={formData.crimeType}
            onChange={handleChange}
            placeholder="Crime Type"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Crime Date</label>
          <input
            type="date"
            name="crimeDate"
            value={formData.crimeDate}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
      </div>

      {/* Single-column layout for remaining fields */}
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Crime Location</label>
          <input
            type="text"
            name="crimeLocation"
            value={formData.crimeLocation}
            onChange={handleChange}
            placeholder="Crime Location"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Arresting Officer Name</label>
          <input
            type="text"
            name="arrestingOfficerName"
            value={formData.arrestingOfficerName}
            onChange={handleChange}
            placeholder="Arresting Officer Name"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Arrest Date</label>
          <input
            type="date"
            name="arrestDate"
            value={formData.arrestDate}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Expected Completion Date</label>
          <input
            type="date"
            name="expectedCompletionDate"
            value={formData.expectedCompletionDate}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            placeholder="Status"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Judge Name</label>
          <input
            type="text"
            name="judgeName"
            value={formData.judgeName}
            onChange={handleChange}
            placeholder="Judge Name"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Public Prosecutor Name</label>
          <input
            type="text"
            name="publicProsecutorName"
            value={formData.publicProsecutorName}
            onChange={handleChange}
            placeholder="Public Prosecutor Name"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Lawyer Name</label>
          <input
            type="text"
            name="lawyerName"
            value={formData.lawyerName}
            onChange={handleChange}
            placeholder="Lawyer Name"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Court Name</label>
          <input
            type="text"
            name="courtName"
            value={formData.courtName}
            onChange={handleChange}
            placeholder="Court Name"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
      </div>

      <button type="submit" className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold p-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 shadow-lg transform transition-all duration-200 hover:scale-105">
        Create Court Case
      </button>
    </form>
  );
};

export default CreateCourtCase;

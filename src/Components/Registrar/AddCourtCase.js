import React, { useState } from 'react';
import { CreateCaseAPICall } from '../API/RegistrarAPI';

const CreateCourtCase = () => {
  const [created, setCreated] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    defendentName: '', defendentAddress: '', crimeType: '', crimeDate: '',
    crimeLocation: '', arrestingOfficerName: '', arrestDate: '', startDate: '',
    expectedCompletionDate: '', status: '', judgeName: '', publicProsecutorName: '',
    lawyerName: '', courtName: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await CreateCaseAPICall(formData);
    setMessage(result ? "Court Case Added!" : "Failed to Add Case!");
    setCreated(result);
  };

  const renderInput = (label, name, type = "text", placeholder = "") => (
    <div>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder || label}
        required
        className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-4 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Create Court Case</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {renderInput("Defendant Name", "defendentName")}
        {renderInput("Defendant Address", "defendentAddress")}
        {renderInput("Crime Type", "crimeType")}
        {renderInput("Crime Date", "crimeDate", "date")}
      </div>

      <div className="space-y-6">
        {renderInput("Crime Location", "crimeLocation")}
        {renderInput("Arresting Officer Name", "arrestingOfficerName")}
        {renderInput("Arrest Date", "arrestDate", "date")}
        {renderInput("Start Date", "startDate", "date")}
        {renderInput("Expected Completion Date", "expectedCompletionDate", "date")}
        {renderInput("Status", "status")}
        {renderInput("Judge Name", "judgeName")}
        {renderInput("Public Prosecutor Name", "publicProsecutorName")}
        {renderInput("Lawyer Name", "lawyerName")}
        {renderInput("Court Name", "courtName")}
      </div>

      <button type="submit" className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold p-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 shadow-lg transform transition-all duration-200 hover:scale-105">
        Create Court Case
      </button>
      {message && (
        <div className={`text-center font-semibold mb-1 mt-4 ${created ? "text-green-500" : "text-red-500"}`}>
          {message}
        </div>
      )}
    </form>
  );
};

export default CreateCourtCase;
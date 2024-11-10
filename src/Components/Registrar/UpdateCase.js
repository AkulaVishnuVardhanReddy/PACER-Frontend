import React, { useState } from "react";
import { GetCourtCaseDetailsAPICall, UpdateCourtCaseAPICall } from "../API/RegistrarAPI"; // Replace with your actual API calls

const UpdateCourtCase = () => {
  const [caseId, setCaseId] = useState("");
  const [caseDetails, setCaseDetails] = useState(null);
  const [message, setMessage] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const [updated, setUpdated] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [formData, setFormData] = useState({
    defendentName: "", defendentAddress: "", crimeType: "", crimeDate: "",
    crimeLocation: "", arrestingOfficerName: "", arrestDate: "", startDate: "",
    expectedCompletionDate: "", status: "", judgeName: "", publicProsecutorName: "",
    lawyerName: "", courtName: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaseIdSubmit = async () => {
    if (!caseId) {
      setMessage("Please enter a valid Case ID.");
      return;
    }

    try {
      const { data } = await GetCourtCaseDetailsAPICall(caseId);
      
      if (data) {
        setCaseDetails(data);
        setFormData(data);
        setFetched(true);
        setMessage("Court case details fetched successfully!");
      } 
    } catch (error) {
        setFetched(false);
        setMessage("Court case not found. Please check the Case ID.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await UpdateCourtCaseAPICall(formData, caseId);
    setUpdateMessage(result ? "Court Case updated successfully!" : "Failed to update Court Case!");
    setUpdated(true);
  };

  const inputClass = "border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm";

  return (
    <div>
      <form onSubmit={handleCaseIdSubmit} className="max-w-lg mx-auto mb-8 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Update Court Case</h2>

        {/* Case ID Input to fetch details */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Case ID</label>
          <input
            type="text"
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
            placeholder="Enter Case ID to fetch details"
            className={inputClass}
          />
          <button
            type="button"
            onClick={handleCaseIdSubmit}
            className="w-full mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-200"
          >
            Get Details
          </button>
        </div>
        
        {/* Display Message */}
        {message && <div className={`text-center font-semibold mt-4 ${fetched ? "text-green-500" : "text-red-500"}`}>{message}</div>}
      </form>

      {/* Only show the update form if case details are fetched */}
      {caseDetails && (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-4 p-8 bg-white shadow-lg rounded-lg">

          {/* Court Case Details Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {[
              "defendentName", "defendentAddress", "crimeType", "crimeDate"
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block text-gray-700 font-medium mb-2">
                  {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field.replace(/([A-Z])/g, ' $1')}
                  required
                  className={inputClass}
                />
              </div>
            ))}
          </div>

          {/* Other Fields */}
          <div className="space-y-6">
            {[
              { label: "Crime Location", name: "crimeLocation" },
              { label: "Arresting Officer Name", name: "arrestingOfficerName" },
              { label: "Arrest Date", name: "arrestDate", type: "date" },
              { label: "Start Date", name: "startDate", type: "date" },
              { label: "Expected Completion Date", name: "expectedCompletionDate", type: "date" },
              { label: "Status", name: "status" },
              { label: "Judge Name", name: "judgeName" },
              { label: "Public Prosecutor Name", name: "publicProsecutorName" },
              { label: "Lawyer Name", name: "lawyerName" },
              { label: "Court Name", name: "courtName" }
            ].map(({ label, name, type = "text" }, idx) => (
              <div key={idx}>
                <label className="block text-gray-700 font-medium mb-2">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={label}
                  required
                  className={inputClass}
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold p-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            Update Court Case
          </button>
          {updated && <div className={`text-center font-semibold mt-4 ${updated ? "text-green-500" : "text-red-500"}`}>{updateMessage}</div>}
      
        </form>
      )}
    </div>
  );
};

export default UpdateCourtCase;

import React, { useState } from 'react';
import { ScheduleCourtCaseAPICall } from '../API/RegistrarAPI';

const ScheduleCourtCase = () => {
  const [formData, setFormData] = useState({
    courtCase: { cin: "" }, hearingDate: '', adjournmentReason: '', procedingSummary: '', nextHearingDate: ''
  });
  const [message, setMessage] = useState("");
  const [created, setCreated] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    const [mainKey, subKey] = name.includes(".") ? name.split(".") : [name];
    setFormData(prev => ({
      ...prev,
      [mainKey]: subKey ? { ...prev[mainKey], [subKey]: value } : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await ScheduleCourtCaseAPICall(formData);
    setMessage(result ? "Case has been Scheduled!" : "Case not Scheduled!");
    setCreated(result);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mb-4">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Schedule Court Case</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <InputField label="Court Case CIN" name="courtCase.cin" value={formData.courtCase.cin} onChange={handleChange} />
        <InputField label="Hearing Date" name="hearingDate" value={formData.hearingDate} onChange={handleChange} type="date" />
      </div>
      <div className="space-y-6">
        <InputField label="Adjournment Reason" name="adjournmentReason" value={formData.adjournmentReason} onChange={handleChange} />
        <TextAreaField label="Proceding Summary" name="procedingSummary" value={formData.procedingSummary} onChange={handleChange} />
        <InputField label="Next Hearing Date" name="nextHearingDate" value={formData.nextHearingDate} onChange={handleChange} type="date" />
      </div>
      <button type="submit" className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold p-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 shadow-lg transform transition-all duration-200 hover:scale-105">
        Schedule Court Case
      </button>
      {message && (
        <div className={`text-center font-semibold mt-4 ${created ? "text-green-500" : "text-red-500"}`}>
          {message}
        </div>
      )}
    </form>
  );
};

const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
      placeholder={label}
    />
  </div>
);

const TextAreaField = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required
      className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm h-24"
      placeholder={label}
    />
  </div>
);

export default ScheduleCourtCase;

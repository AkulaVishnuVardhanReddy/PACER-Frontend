import React, { useState } from "react";
import { AddAccountAPICall } from "../API/RegistrarAPI";

const AddAccount = () => {
  const [created, setCreated] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", dob: "", emailId: "", phoneNo: "", photo: null,
    role: { id: "" }, username: "", password: "", questionAns1: "", questionAns2: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [mainKey, subKey] = name.split(".");
      setFormData(prev => ({ ...prev, [mainKey]: { ...prev[mainKey], [subKey]: value } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await AddAccountAPICall(formData);
    setMessage(result ? "Account created successfully!" : "Failed to create Account!");
    setCreated(result);
  };

  const inputClass = "border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm";

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-4 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">User Registration</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {["First Name", "Last Name", "Username", "Password"].map((label, idx) => (
          <div key={idx}>
            <label className="block text-gray-700 font-medium mb-2">{label}</label>
            <input
              type={label === "Password" ? "password" : "text"}
              name={label.toLowerCase().replace(" ", "")}
              value={formData[label.toLowerCase().replace(" ", "")]}
              onChange={handleChange}
              placeholder={label}
              required
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {[
          { label: "Date of Birth", name: "dob", type: "date" },
          { label: "Email ID", name: "emailId", type: "email" },
          { label: "Phone Number", name: "phoneNo", type: "tel" },
          { label: "Role ID", name: "role.id", type: "text", placeholder: "1-Registrar 2-Judge 3-Lawyer" }
        ].map(({ label, name, type, placeholder = label }, idx) => (
          <div key={idx}>
            <label className="block text-gray-700 font-medium mb-2">{label}</label>
            <input
              type={type}
              name={name}
              value={name.includes(".") ? formData.role.id : formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {["Primary School", "Best Friend"].map((label, idx) => (
          <div key={idx}>
            <label className="block text-gray-700 font-medium mb-2">Your {label}</label>
            <input
              type="text"
              name={`questionAns${idx + 1}`}
              value={formData[`questionAns${idx + 1}`]}
              onChange={handleChange}
              placeholder={`Answer for ${label.toLowerCase()}`}
              required
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <button type="submit" 
        className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold p-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 shadow-lg transform transition-all duration-200 hover:scale-105">
        Create Account
      </button>
        
      {/* Success and Error Messages */}
      {message && 
      <div className={`text-center font-semibold mt-4 ${created ? "text-green-500" : "text-red-500"}`}>{message}</div>}
    </form>
  );
};

export default AddAccount;
import React, { useState } from "react";
import { AddAccountAPICall } from "../API/RegistrarAPI";

const AddAccount = () => {
  const [created, setCreated] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", dob: "", emailId: "", phoneNo: "", role: { id: "" },
    username: "", password: "", questionAns1: "", questionAns2: ""
  });
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => name.includes(".") 
      ? { ...prev, [name.split(".")[0]]: { ...prev.role, id: value } }
      : { ...prev, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("imageFile", photo);
    data.append("user", new Blob([JSON.stringify(formData)], { type: "application/json" }));

    try {
      const result = await AddAccountAPICall(data);
      setCreated(result.status === 201);
      setMessage(result ? "Account created successfully!" : "Failed to create Account!");
    } catch (error) {
      console.error("Error in submission:", error);
      setCreated(false);
      setMessage("Failed to create Account!");
    }
  };

  const inputClass = "border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm";
  const renderInput = (label, name, type = "text", placeholder = label) => (
    <div key={name}>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        type={type} name={name} placeholder={placeholder} required
        value={name.includes(".") ? formData.role.id : formData[name]}
        onChange={handleChange} className={inputClass}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-4 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">User Registration</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {["First Name", "Last Name", "Username", "Password"].map((label, idx) => 
          renderInput(label, label.replace(" ", "").toLowerCase(), label === "Password" ? "password" : "text")
        )}
      </div>
      <div className="space-y-6">
        {[
          { label: "Date of Birth", name: "dob", type: "date" },
          { label: "Email ID", name: "emailId", type: "email" },
          { label: "Phone Number", name: "phoneNo", type: "tel" },
          { label: "Role ID", name: "role.id", placeholder: "1-Registrar 2-Judge 3-Lawyer" }
        ].map(({ label, name, type, placeholder }) => renderInput(label, name, type, placeholder))}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Upload Image</label>
          <input type="file" name="image" accept="image/*" onChange={e => setPhoto(e.target.files[0])} required className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {["Primary School", "Best Friend"].map((label, idx) =>
          renderInput(`Your ${label}`, `questionAns${idx + 1}`, "text", `Answer for ${label.toLowerCase()}`)
        )}
      </div>
      <button type="submit" className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold p-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 shadow-lg transform transition-all duration-200 hover:scale-105">
        Create Account
      </button>
      {message && <div className={`text-center font-semibold mt-4 ${created ? "text-green-500" : "text-red-500"}`}>{message}</div>}
    </form>
  );
};

export default AddAccount;

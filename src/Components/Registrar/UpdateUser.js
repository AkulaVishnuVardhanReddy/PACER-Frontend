import React, { useState } from "react";
import { UpdateAccountAPICall, GetUserDetailsAPICall } from "../API/RegistrarAPI"; // Replace with your actual API calls

const UpdateAccount = () => {
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [message, setMessage] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const [updated, setUpdated] = useState(false);
  const [fetched, setFetched] = useState(false);
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

  const handleUserIdSubmit = async () => {
    if (!userId) {
      setMessage("Please enter a valid User ID.");
      return;
    }
  
    try {
      const { data } = await GetUserDetailsAPICall(userId);
      
      if (data) {
        setUserDetails(data);
        setFormData(data);
        setFetched(true);
        setMessage("User details fetched successfully!");
      } 
    } catch (error) {
        setMessage("User not found. Please check the User ID.");
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await UpdateAccountAPICall(formData,userId);
    setUpdateMessage(result ? "Account updated successfully!" : "Failed to update Account!");
    setUpdated(true);
  };

  const inputClass = "border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm";

  return (
    <div>
      <form onSubmit={handleUserIdSubmit} className="max-w-xl mx-auto mb-8 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Update Account</h2>

        {/* User ID Input to fetch details */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">User ID</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter User ID to fetch details"
            className={inputClass}
          />
          <button
            type="button"
            onClick={handleUserIdSubmit}
            className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold p-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 shadow-lg"
          >
            Get Details
          </button>
        </div>
        
        {/* Display Message */}
        {message && <div className={`text-center font-semibold mt-4 ${fetched ? "text-green-500" : "text-red-500"}`}>{message}</div>}
      </form>

      {/* Only show the update form if user details are fetched */}
      {userDetails && (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-4 p-8 bg-white shadow-lg rounded-lg">

          {/* User Details Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {["firstName", "lastName", "username", "password"].map((field, idx) => (
                <div key={idx}>
                <label className="block text-gray-700 font-medium mb-2">
                    {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
                <input
                    type={field === "password" ? "password" : "text"}
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
                  value={name.includes(".") ? formData?.role?.id : formData[name]}
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

          <button
            type="submit"
            className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold p-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            Update Account
          </button>
          {updated && <div className={`text-center font-semibold mt-4 ${updated ? "text-green-500" : "text-red-500"}`}>{updateMessage}</div>}
      
        </form>
      )}
    </div>
  );
};

export default UpdateAccount;

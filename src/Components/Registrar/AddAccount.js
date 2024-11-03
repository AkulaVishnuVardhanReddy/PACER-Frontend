import React, { useState } from "react";
import { AddAccountAPICall } from "../API/RegistrarAPI";

const AddAccount = () => {
  const[created,setCreated] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    emailId: "",
    phoneNo: "",
    photo: null,
    role: {
      id: "",
    },
    username: "",
    password: "",
    questionAns1: "",
    questionAns2: "",
  });
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      // Handle nested object like "role.id"
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
    const result = await AddAccountAPICall(formData);
    if (result) {
      setMessage("Account created successfully!");
      setCreated(true);
    } else {
      setMessage("Failed to create Account!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto mb-4 p-8 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        User Registration
      </h2>

      {/* Two-column grid for specific fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
      </div>

      {/* Single-column layout for remaining fields */}
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Email ID
          </label>
          <input
            type="email"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Role ID
          </label>
          <input
            type="text"
            name="role.id"
            value={formData.role.id}
            onChange={handleChange}
            placeholder="1-Registrar  2-Judge   3-Lawyer"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
      </div>
      

      {/* Two-column layout for Security Questions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            What is your Primary School
          </label>
          <input
            type="text"
            name="questionAns1"
            value={formData.questionAns1}
            onChange={handleChange}
            placeholder="Answer for question 1"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Your Best Friend
          </label>
          <input
            type="text"
            name="questionAns2"
            value={formData.questionAns2}
            onChange={handleChange}
            placeholder="Answer for question 2"
            required
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold p-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 shadow-lg transform transition-all duration-200 hover:scale-105"
      >
        Create Account
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

export default AddAccount;

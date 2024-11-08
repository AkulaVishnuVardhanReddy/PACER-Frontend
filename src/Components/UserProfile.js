import React from 'react';
import ProfileLogo from '../Assets/images/ProfileLogo.png';

const UserProfile = () => {
  const userProfile = {
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    dob: "1990-06-15",
    emailId: "jane.doe@example.com",
    phoneNo: 1234567890,
    photo: ProfileLogo, // Placeholder for photo URL
    role: { name: "Administrator" },
    username: "jane_doe",
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Profile</h2>

      {/* Profile Picture */}
      <div className="flex justify-center mb-6">
        <img
          src={userProfile.photo}
          alt={`${userProfile.firstName}'s Profile`}
          className="w-32 h-32 rounded-full border-4 border-indigo-600 shadow-md object-cover"
        />
      </div>

      {/* User Information */}
      <table className="w-full table-auto mb-6">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium text-gray-600">Full Name</td>
            <td className="px-4 py-3 text-gray-700">{`${userProfile.firstName} ${userProfile.lastName}`}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium text-gray-600">Date of Birth</td>
            <td className="px-4 py-3 text-gray-700">{userProfile.dob}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium text-gray-600">Email ID</td>
            <td className="px-4 py-3 text-gray-700">{userProfile.emailId}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium text-gray-600">Phone Number</td>
            <td className="px-4 py-3 text-gray-700">{userProfile.phoneNo}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium text-gray-600">Role</td>
            <td className="px-4 py-3 text-gray-700">{userProfile.role.name}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium text-gray-600">Username</td>
            <td className="px-4 py-3 text-gray-700">{userProfile.username}</td>
          </tr>
        </tbody>
      </table>

      {/* Edit Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;

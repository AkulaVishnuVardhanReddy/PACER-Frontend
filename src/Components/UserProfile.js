import React, { useEffect, useState } from 'react';
import ProfileLogo from '../Assets/images/ProfileLogo.png';
import Shimmar from './Registrar/Shimmar'
import { UserDetailsAPICall } from './API/PublicAPICalls';

const UserProfile = () => {
  const [profile,setProfile] = useState({});
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
        const { data } = await UserDetailsAPICall(sessionStorage.getItem('username'));  //Return Response.data
        console.log(data);
        setProfile(data);
        setLoading(false);
    };
    fetchUserDetails();
  }, []);

  if(loading)
    return <Shimmar/>

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Profile</h2>

      
      <div className="flex justify-center mb-6">
        <img
          src={ProfileLogo}
          alt={`${profile.firstName}'s Profile`}
          className="w-32 h-32 rounded-full border-4 border-indigo-600 shadow-md object-cover"
        />
      </div>

      
      <table className="w-full table-auto mb-6">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium text-gray-600">Full Name</td>
            <td className="px-4 py-3 text-gray-700">{`${profile.firstName} ${profile.lastName}`}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium text-gray-600">Date of Birth</td>
            <td className="px-4 py-3 text-gray-700">{profile.dob}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium text-gray-600">Email ID</td>
            <td className="px-4 py-3 text-gray-700">{profile.emailId}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium text-gray-600">Phone Number</td>
            <td className="px-4 py-3 text-gray-700">{profile.phoneNo}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium text-gray-600">Role</td>
            <td className="px-4 py-3 text-gray-700">{profile.role?.name}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium text-gray-600">Username</td>
            <td className="px-4 py-3 text-gray-700">{profile.username}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium text-gray-600">Password</td>
            <td className="px-4 py-3 text-gray-700">**************</td>
          </tr>
        </tbody>
      </table>

      
      <div className="text-center mt-8">
         
      </div>
    </div>
  );
};

export default UserProfile;

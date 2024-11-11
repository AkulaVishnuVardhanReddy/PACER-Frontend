import React, { useEffect, useState } from 'react';
import ProfileLogo from '../Assets/images/ProfileLogo.png';
import Shimmar from './Shimmar';
import { GetPhotoAPICall, UserDetailsAPICall } from './API/PublicAPICalls';

const UserProfile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const username = sessionStorage.getItem("username");

  useEffect(() => {
    (async () => {
      const { data } = await UserDetailsAPICall(username);
      setProfile(data);
      setLoading(false);
    })();
    if (username) fetchPhoto();
  }, [username]);

  const fetchPhoto = async () => {
    try {
      const response = await GetPhotoAPICall(username);
      setImageUrl(URL.createObjectURL(response.data));
    } catch (error) {
      console.error("Error fetching user photo:", error);
    }
  };

  if (loading) return <Shimmar />;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold font-mono text-gray-800 text-center mb-8">Profile</h2>
      <div className="flex justify-center mb-6">
        <img src={imageUrl || ProfileLogo} alt={`${profile.firstName}'s Profile`} className="w-32 h-32 rounded-full shadow-md object-cover" />
      </div>
      <table className="w-full table-auto mb-6">
        <tbody>
          {[
            ["Full Name", `${profile.firstName} ${profile.lastName}`],
            ["Date of Birth", profile.dob],
            ["Email ID", profile.emailId],
            ["Phone Number", profile.phoneNo],
            ["Role", profile.role?.name],
            ["Username", profile.username],
            ["Password", "********"]
          ].map(([label, value]) => (
            <tr key={label} className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium text-gray-600">{label}</td>
              <td className="px-4 py-3 text-gray-700">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserProfile;

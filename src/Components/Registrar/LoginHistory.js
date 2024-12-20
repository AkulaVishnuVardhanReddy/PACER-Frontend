import React, { useState } from 'react';
import { loginHistoryAPICall } from '../API/RegistrarAPI';

const LoginHistory = () => {
  const [loginHistory, setLoginHistory] = useState([]);
  const [empty,setEmpty] = useState(false);
  const [userid,setUserid] =useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const history = await loginHistoryAPICall(userid)
    if (Array.isArray(history.data)) setLoginHistory(history.data);
    if (history.data.length === 0) setEmpty(true);
    else setEmpty(false);
  };

  

  return (
    <>
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
    <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">User Login Details</h2>
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label className="font-medium text-gray-700">User ID:</label>
            <input
                type="text"
                value={userid}
                onChange={(e) => setUserid(e.target.value)}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200"
                required
            />
            <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-200">
                Search
            </button>
        </form>
    </div>

    {empty && (
  <h1 className="text-md text-center font-bold text-red-500 p-6">
    The User has not Logged in yet!
  </h1>
)}


    <div className="mx-auto p-8 bg-white shadow-lg rounded-lg max-w-3xl">
      <table className="min-w-full border-collapse">
        <thead className="bg-indigo-400 text-white">
          <tr>
            <th className="p-4 border-b border-gray-300">User ID</th>
            <th className="p-4 border-b border-gray-300">Full Name</th>
            <th className="p-4 border-b border-gray-300">Role</th>
            <th className="p-4 border-b border-gray-300">Login Time</th>
            <th className="p-4 border-b border-gray-300">Logout Time</th>
          </tr>
        </thead>
        <tbody>
          {loginHistory.map((history, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white hover:bg-indigo-50'}>
              <td className="p-4 border-b border-gray-300">{history.user.id}</td>
              <td className="p-4 border-b border-gray-300">{history.user.firstName} {history.user.lastName}</td>
              <td className="p-4 border-b border-gray-300">{history.user.role.name.split("_")[1]}</td>
              <td className="p-4 border-b border-gray-300">{history.loginTime.replace("T"," ")}</td>
              <td className="p-4 border-b border-gray-300">{history.logoutTime.replace("T"," ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default LoginHistory;

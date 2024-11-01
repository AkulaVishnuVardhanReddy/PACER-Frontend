import React, { useState } from 'react';

const Registrar = () => {
    const [queryType, setQueryType] = useState('pending'); // Default to 'pending' cases
    const [userType, setUserType] = useState('judge');
    const [username, setUsername] = useState('');
    const [users, setUsers] = useState([
        { id: 1, username: 'judge_john', role: 'judge' },
        { id: 2, username: 'lawyer_smith', role: 'lawyer' }
    ]);

    const handleQueryChange = (event) => {
        setQueryType(event.target.value);
    };

    const handleUserCreation = () => {
        if (username.trim()) {
            const newUser = {
                id: users.length + 1,
                username,
                role: userType,
            };
            setUsers([...users, newUser]);
            setUsername('');
            alert('User created successfully');
        } else {
            alert('Please enter a valid username');
        }
    };

    const handleUserDeletion = (userId) => {
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
        alert('User deleted successfully');
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-8">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
                <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">Registrar Dashboard</h1>
                
                {/* Case Query Section */}
                <div className="flex justify-around mb-4">
                    <button 
                        className={`py-2 px-4 rounded-md transition-colors duration-300 ${
                            queryType === 'pending' ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                        }`}
                        value="pending"
                        onClick={handleQueryChange}
                    >
                        Pending Cases
                    </button>
                    <button 
                        className={`py-2 px-4 rounded-md transition-colors duration-300 ${
                            queryType === 'resolved' ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                        }`}
                        value="resolved"
                        onClick={handleQueryChange}
                    >
                        Resolved Cases
                    </button>
                    <button 
                        className={`py-2 px-4 rounded-md transition-colors duration-300 ${
                            queryType === 'upcoming' ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                        }`}
                        value="upcoming"
                        onClick={handleQueryChange}
                    >
                        Upcoming Hearings
                    </button>
                </div>

                {/* User Management Section */}
                <div className="bg-indigo-50 p-4 rounded-lg shadow-inner mt-6">
                    <h2 className="text-lg font-semibold text-indigo-700 mb-4">User Management</h2>
                    <div className="mb-4">
                        <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                            className="border border-gray-300 rounded-md p-2 mr-2 w-full"
                        />
                        <select 
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            className="border border-gray-300 rounded-md p-2 mr-2 w-full mt-2"
                        >
                            <option value="judge">Judge</option>
                            <option value="lawyer">Lawyer</option>
                        </select>
                        <button 
                            onClick={handleUserCreation}
                            className="bg-green-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-green-600 transition-colors duration-300"
                        >
                            Create Account
                        </button>
                    </div>
                    <h3 className="text-indigo-700 font-semibold mt-6">Existing Users:</h3>
                    <ul className="mt-2">
                        {users.map((user) => (
                            <li 
                                key={user.id} 
                                className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm mb-2"
                            >
                                <span>{user.username} ({user.role})</span>
                                <button 
                                    onClick={() => handleUserDeletion(user.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Registrar;
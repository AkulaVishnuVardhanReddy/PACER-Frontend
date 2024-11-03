import React, { useState } from 'react';
import axios from 'axios';

const RemoveAccountForm = () => {
    const [userId, setUserId] = useState('');
    const [confirmation, setConfirmation] = useState(false);
    const [message, setMessage] = useState('');

    const handleRemoveAccount = async (e) => {
        e.preventDefault();
        setMessage(confirmation ? '' : 'Please confirm that you want to delete the account.');

        if (!confirmation) return;

        try {
            const response = await axios.delete(`/users/${userId}`);
            if (response.status === 200) {
                setMessage('Account successfully deleted.');
                setUserId('');
                setConfirmation(false);
            }
        } catch {
            setMessage('Error: Could not delete the account');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Remove Account</h2>
            <form onSubmit={handleRemoveAccount} className="flex flex-col space-y-4">
                <label className="font-medium text-gray-700">User ID:</label>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    required
                />
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={confirmation}
                        onChange={() => setConfirmation(!confirmation)}
                        className="mr-2 h-5 w-5 text-red-500 border-gray-300 rounded focus:ring-red-500"
                    />
                    <label className="text-sm text-gray-700">Confirm account deletion</label>
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-200">
                    Remove Account
                </button>
                {message && <p className={`mt-4 font-semibold ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
            </form>
        </div>
    );
};

export default RemoveAccountForm;

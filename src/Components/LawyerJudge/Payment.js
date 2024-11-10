import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CaseAccessHistoryService } from '../Services/CaseAccessHistoryService';
import { addCaseAccessHistoryAPICall } from '../API/PublicAPICalls';

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('visa');
  const [amount, setAmount] = useState(0);
  const lawyerName = sessionStorage.getItem("FirstName"); // Replace with dynamic data if needed
  const {cin} = useParams();
  const navigate = useNavigate(); 
  const role = sessionStorage.getItem("role")?.split("_")[1].toLowerCase();

  useEffect(() => {
    const randomAmount = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    setAmount(randomAmount);
  }, [cin]);

  const CaseHistory = async()=>{
    const data= CaseAccessHistoryService(cin,amount);
    await addCaseAccessHistoryAPICall(data);
  }

  const handlePayments =()=>{
    CaseHistory();
    const caseId=cin;
    console.log(`Navigating to: /${role}/case-details/${caseId}`);
    navigate(`/${role}/case-details/${caseId}`);
  }

  return (
    <div className="p-10 w-full min-h-screen  text-white flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white text-gray-800 shadow-2xl rounded-3xl p-10">
        <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-6">Payment</h2>

        {/* Display Lawyer Name, CIN, and Amount */}
        <div className="mb-8">
          <p className="text-lg font-semibold">Lawyer Name: <span className="text-purple-600">{lawyerName}</span></p>
          <p className="text-lg font-semibold">CIN: <span className="text-purple-600">{cin}</span></p>
          <p className="text-2xl font-bold">Amount: ₹{amount}</p>
        </div>
        </div>

        {/* Payment Method Selection */}
        <div className="mb-10 text-center">
          <h3 className="text-2xl font-semibold mb-6">Choose Payment Method</h3>
          <div className="flex justify-center space-x-6">
            {['visa', 'paypal', 'amazon'].map((method) => (
              <button
                key={method}
                onClick={() => setPaymentMethod(method)}
                className={`w-1/4 p-4 border-2 rounded-xl transition transform hover:scale-105 ${
                  paymentMethod === method ? 'border-purple-700 bg-purple-100' : 'border-gray-300 bg-gray-100'
                }`}
              >
                <span className="text-xl font-bold">
                  {method.charAt(0).toUpperCase() + method.slice(1)}
                </span>
                <span className="text-sm block mt-1 text-gray-600">
                  Pay With {method.charAt(0).toUpperCase() + method.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Credit Card Information */}
        <form className="mb-8" onSubmit={handlePayments}>
          <h3 className="text-2xl font-semibold mb-6 text-center">Debit Card Information</h3>
          <div className="space-y-4">
            {[
              { label: 'Card Holder Name', id: 'cardHolderName', placeholder: 'Sazid Khan' },
              { label: 'Card No', id: 'cardNo', placeholder: '2589 2476 2457 4587' },
              { label: 'Expiry Date', id: 'expiryDate', placeholder: 'MM/YY' },
              { label: 'CVV', id: 'cvv', placeholder: 'CVV' },
            ].map(({ label, id, placeholder }) => (
              <div key={id} className="relative">
                <label className="block text-sm font-medium mb-2" htmlFor={id}>{label}</label>
                <input
                  type="text"
                  id={id}
                  placeholder={placeholder}
                  className="w-full p-4 border rounded-xl bg-gray-50 shadow focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-300"
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 mt-4 text-white p-4 rounded-xl font-semibold hover:bg-purple-800 transition duration-200 transform hover:scale-105 shadow-md"
          >
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
}

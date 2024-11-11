import { useState } from "react";
import { useNavigate } from "react-router-dom";
import takkeda from "../Assets/images/takkeda.png";
import Logo from "../Assets/images/Logo.png";
import { Logged } from "./API/APIContext";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [UserName, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await Logged(UserName, Password);
    userData
      ? navigate(`/${userData.role.split("_")[1].toLowerCase()}`)
      : setErrorMessage("Login Failed");
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center backdrop-blur-md"
        style={{ backgroundImage: `url(${takkeda})` }}
      ></div>
      <div className="relative z-10 w-full max-w-xs p-8 bg-white bg-opacity-90 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Logo" className="h-28 w-28" />
        </div>
        {errorMessage && <div className="mb-4 p-3 bg-red-400 text-white text-center rounded-md">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <FaUser className="absolute left-3 top-3 text-gray-600" />
            <input
              className="w-full pl-10 py-3 text-sm border rounded-md focus:border-purple-500"
              type="text"
              placeholder="User Name"
              value={UserName}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 relative">
            <FaLock className="absolute left-3 top-3 text-gray-600" />
            <input
              className="w-full pl-10 py-3 text-sm border rounded-md focus:border-purple-500"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between text-sm mb-6">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                className="mr-2"
                checked={showPassword}
                onChange={() => setShowPassword((prev) => !prev)}
              />
              Show Password
            </label>
            <a href="/aboutus" className="text-gray-600 hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold p-3 rounded-lg hover:scale-105 transition-all"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

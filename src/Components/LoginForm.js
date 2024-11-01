import { useState } from "react";
import { useNavigate } from "react-router-dom";
import takkeda from "../Assets/images/takkeda.png";
import { Logged } from "./API/APIContext"; // Direct named import

const Login = () => {
  const [role, setRole] = useState("");
  const [UserName, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const isLoggedIn = await Logged(UserName, Password);
    if (isLoggedIn) {
      if (role === "Judge") {
        navigate("/judge");
      } else if (role === "Registrar") {
        navigate("/registrar");
      }
    }
  };

  return (
    <div className="flex items-center justify-center relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${takkeda})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px)",
        }}
      ></div>
      <div className="relative z-10">
        <form onSubmit={handleSubmit} className="shadow-xl p-8 bg-white bg-opacity-50 rounded-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

          <div className="mb-5">
            <label htmlFor="role" className="block text-lg font-medium text-gray-700 mb-2">
              Select your role:
            </label>
            <select
              className="border-2 border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-blue-500"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled>Select your role</option>
              <option value="Judge">Judge</option>
              <option value="Registrar">Registrar</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="username" className="block text-lg font-medium text-gray-700 mb-2">
              Username:
            </label>
            <input
              className="border-2 border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-blue-500"
              type="text"
              id="username"
              placeholder="Enter your username"
              value={UserName}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">
              Password:
            </label>
            <input
              className="border-2 border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

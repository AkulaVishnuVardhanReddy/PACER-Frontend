import { useNavigate, Link } from "react-router-dom";
import emblem from "../Assets/images/emblem.svg";

const HomeHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between bg-gray-300 shadow-md p-1">
      <div className="flex items-center pl-4">
        <img src={emblem} alt="Emblem" className="h-12 m-3" />
        <div className="m-3">
          <h2 className="text-md font-bold">न्याय विभाग</h2>
          <h1 className="text-md font-bold">JUDICIARY INFORMATION SYSTEM</h1>
        </div>
      </div>
      <ul className="flex gap-2 p-2 m-2 items-center">
        {["Home", "About Us", "Judiciary Info"].map((text, idx) => (
          <li key={idx} className="p-2 text-lg font-semibold hover:text-gray-700">
            <Link to={text === "Home" ? "/" : `/${text.replace(" ", "").toLowerCase()}`}>{text}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <button
          className="h-9 px-3 mr-6 py-1 text-md font-semibold text-white rounded shadow-md bg-green-600 mr-2"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default HomeHeader;

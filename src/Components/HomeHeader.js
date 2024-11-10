import { useNavigate, Link } from "react-router-dom";
import emblem from "../Assets/images/emblem.svg";

const HomeHeader = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between bg-gray-300 shadow-md p-1">
        <div className="flex">
          <div>
            <img src={emblem} alt="Emblem" className="h-12 m-3" />
          </div>
          <div className="m-3">
            <h2 className="text-md font-bold">न्याय विभाग</h2>
            <h1 className="text-md font-bold">DEPARTMENT OF JUSTICE</h1>
          </div>
        </div>

        <div className="flex items-center">
          <ul className="flex gap-2 p-2 m-2">
            <li className="p-2 text-lg font-semibold hover:text-gray-700 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2 text-lg font-semibold hover:text-gray-700 cursor-pointer">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="p-2 text-lg font-semibold hover:text-gray-700 cursor-pointer">
              <Link to="/judiciaryinfo">Judicial Information</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center pr-2">
        <button
  className="h-9 px-3 py-1 text-md font-semibold text-gray-500 border border-gray-500 rounded shadow-md"
  onClick={() => navigate("/login")}
>
  Login
</button>
</div>


      </div>
    </div>
  );
};

export default HomeHeader;

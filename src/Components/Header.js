import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import emblem from "../Assets/images/emblem.svg";

const Header = () => {
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isProfilesDropdownOpen, setIsProfilesDropdownOpen] = useState(false);
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

            {/* Dropdown for "Profiles" */}
            <li
              className="relative p-2 text-lg font-semibold hover:text-gray-700 cursor-pointer"
              onMouseEnter={() => setIsProfilesDropdownOpen(true)}
              onMouseLeave={() => setIsProfilesDropdownOpen(false)}
            >
              Profiles
              {isProfilesDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/chiefjustice">
                      Chief Justice and Sitting Judges
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/formerjudges">Former Judges</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/registry">Registry</Link>
                  </li>
                </ul>
              )}
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

export default Header;

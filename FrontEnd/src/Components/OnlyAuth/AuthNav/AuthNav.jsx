import React, { useContext, useState } from "react";
import blacklogo from "../../../images/LogoBlack.png";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
function AuthNav({ user }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Authentication");
  };

  const handleProfile = () => {
    navigate(`/Profile/${user.userid}`);
  };

  return (
    <nav className="bg-slate-900 h-20 p-2 sticky z-50 inset-x-0 top-0 shadow-md">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">
          <img
            src={blacklogo}
            alt="Logo"
            className="h-16 mb-3"
            onClick={() => navigate("/only")}
          />
        </div>
        {user && user.username ? (
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center">
              <Avatar sx={{ bgcolor: deepOrange[500] }}>
                {user.username.charAt(0).toUpperCase()}
              </Avatar>
              <small className="text-white ml-2">{user.username}</small>
            </button>

            {dropdownVisible && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-1">
                <button
                  onClick={handleProfile}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to={"/Authentication"}
            className="text-white px-4 py-2 hover:text-orange-600"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default AuthNav;

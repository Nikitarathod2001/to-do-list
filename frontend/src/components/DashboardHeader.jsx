import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const DashboardHeader = () => {
  const { username, setToken } = useContext(AppContext);

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("todo-token");
    setToken(false);
    navigate("/");
  };

  return (
    <div className="flex justify-end p-2">
      <div className="flex items-center gap-6 p-4">
        <h1 className="text-xl text-gray-600">Welcome! <span className="text-indigo-600 font-semibold">{username}</span></h1>
        <button
          onClick={logoutHandler}
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;

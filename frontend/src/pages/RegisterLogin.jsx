import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterLogin = () => {

  const [state, setState] = useState("Register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Left Side (Image / Illustration) */}
      <div className="hidden md:flex md:w-1/3 bg-indigo-400 text-white flex-col items-center justify-center p-10">
        <h2 className="text-5xl font-bold mb-4 text-white">Welcome!</h2>
        <p className="text-lg text-indigo-100 text-center">
          Create your account or log in to access your personalized dashboard.
        </p>
      </div>

      {/* Right Side (Form) */}
      <div className="w-full md:w-2/3 flex items-center justify-center bg-gray-100">
        <form onSubmit={onSubmitHandler} className={`w-full max-w-md bg-white shadow-lg rounded-2xl p-8 mx-4 transform transition-all ease-in-out duration-300 ${state === "Register" ? "scale-105" : "scale-100"}`}>
          <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6 cursor-pointer">
            <span className={`${state === "Register" ? " border-b-3 border-b-gray-800 transition-all ease-in-out duration-300" : ""}`} onClick={() => setState("Register")}>
              Create Account
            </span> / 
            <span className={`${state === "Login" ? " border-b-3 border-b-gray-800 transition-all ease-in-out duration-300" : ""}`} onClick={() => setState("Login")}>
              Login
            </span>
          </h1>

          {
            state === "Register" && 
            <div className="mb-4">
              <p className="text-gray-700 font-medium mb-2">Full Name :</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
          }
          

          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2">Email :</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <p className="text-gray-700 font-medium mb-2">Password :</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default RegisterLogin;

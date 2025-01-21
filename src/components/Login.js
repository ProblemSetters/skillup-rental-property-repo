import React from "react";
import { ToastContainer } from "react-toastify";
// import usersData from "../data/users.json";

const Login = () => {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
        <input
          data-testid="email-input"  
          id="email"
          type="email"
          placeholder="Email"
          className="w-full mb-6 p-2 border rounded"
        />
        <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
        <input
          data-testid="password-input"   
          id="password"
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 border rounded"
        />
        <p data-testid="error" className="text-red-500 my-8">Error Message</p>
        <button
          data-testid="login-button"   
          className="w-full bg-green-700 text-white p-2 mt-16 rounded"
        >
          Login
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
import React, { useState } from "react";
import usersData from "../data/users.json";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = usersData.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setUser(user);
      toast.success(`${user.name} is logged in`);
      setError("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-6 p-2 border rounded"
        />
        <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-2 border rounded"
        />
        {error && <p className="text-red-500 my-8">{error}</p>}
        <button
          onClick={handleLogin}
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
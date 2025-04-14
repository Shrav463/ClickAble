import React, { useState } from "react";
import { speak } from "../utils/speak";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add actual authentication logic here
    alert("Login successful!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1
          className="text-2xl font-bold mb-6 text-center"
          onMouseEnter={() => speak("Login to ClickAble")}
        >
          Login to ClickAble
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
              onMouseEnter={() => speak("Email address")}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => speak("Enter your email")}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
              onMouseEnter={() => speak("Password")}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => speak("Enter your password")}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            onMouseEnter={() => speak("Login")}
          >
            Login
          </button>
        </form>

        <p
          className="mt-4 text-sm text-center text-gray-600"
          onMouseEnter={() => speak("Don't have an account?")}
        >
          Don’t have an account? <span className="text-blue-600 underline cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;

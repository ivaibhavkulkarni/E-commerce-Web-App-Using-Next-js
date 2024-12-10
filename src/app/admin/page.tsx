"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
    // Add login logic here
  };

  const handleCreateUser = () => {
    router.push("/admin/createUser"); // Redirect to Create User page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">GreenGrocer Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-[#8BC34A] focus:border-[#8BC34A]"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-[#8BC34A] focus:border-[#8BC34A]"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mb-4 text-white bg-[#8BC34A] rounded-md hover:bg-[#7CB342]"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <button
            onClick={handleCreateUser}
            className="w-full px-4 py-2 mt-2 text-[#8BC34A] border border-[#8BC34A] rounded-md hover:bg-[#8BC34A] hover:text-white"
          >
            Create New User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

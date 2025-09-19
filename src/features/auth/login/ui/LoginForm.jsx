import React, { useState } from "react";
import { useLogin } from "../model/useLogin";
import { useNavigate } from "react-router";
import { frontRoutes } from "@/shared/config/routes/frontRoutes";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await login({ email, password });
    if (result.user) navigate(frontRoutes.pages.HomePage.navigationPath);
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-3 rounded-lg bg-gray-800 text-yellow-300 placeholder-yellow-500 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="p-3 rounded-lg bg-gray-800 text-yellow-300 placeholder-yellow-500 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-500 disabled:opacity-50 transition-colors duration-300"
      >
        Login
      </button>

      {error && (
        <div className="text-red-500 text-sm mt-1">
          {error.data?.message || "Login failed"}
        </div>
      )}
    </form>
  );
}

import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex items-center justify-center py-24 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-8">
        <h2 className="text-3xl font-light text-[#3A2E2A] text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-sm text-[#6B5C55] text-center mb-8">
          Sign in to continue shopping
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full px-4 py-3 rounded-lg
              border border-[#E6D5C7]
              text-[#3A2E2A]
              placeholder-[#9A857A]
              focus:outline-none
              focus:ring-2 focus:ring-[#C9A24D]/40
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="
              w-full px-4 py-3 rounded-lg
              border border-[#E6D5C7]
              text-[#3A2E2A]
              placeholder-[#9A857A]
              focus:outline-none
              focus:ring-2 focus:ring-[#C9A24D]/40
            "
          />

          <button
            type="submit"
            className="
              w-full py-3 rounded-lg
              bg-[#3A2E2A]
              text-white font-light tracking-wide
              hover:bg-[#2F2522]
              transition
            "
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-[#6B5C55] mt-6">
          Don’t have an account?{" "}
          <span className="text-[#C9A24D] cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

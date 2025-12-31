import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    /* Changes:
       1. Added 'min-h-[calc(100vh-5rem)]' to account for the 80px (h-20) navbar.
       2. Kept 'flex items-center justify-center' for perfect centering.
    */
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <h2 className="mb-2 text-center text-3xl font-light text-[#3A2E2A]">
          Welcome Back
        </h2>
        <p className="mb-8 text-center text-sm text-[#6B5C55]">
          Sign in to continue shopping
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-[#E6D5C7] px-4 py-3 text-[#3A2E2A] placeholder-[#9A857A] focus:ring-2 focus:ring-[#C9A24D]/40 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-lg border border-[#E6D5C7] px-4 py-3 text-[#3A2E2A] placeholder-[#9A857A] focus:ring-2 focus:ring-[#C9A24D]/40 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-sm bg-[#3A2E2A] py-3 text-xs font-medium tracking-widest text-white uppercase shadow-md transition-all duration-300 hover:bg-[#C9A24D]"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#6B5C55]">
          Don’t have an account?{" "}
          <span className="cursor-pointer text-[#C9A24D] hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

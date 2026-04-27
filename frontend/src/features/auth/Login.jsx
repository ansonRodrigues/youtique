import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/80 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5 backdrop-blur-xl">
        <h2 className="mb-2 text-center text-3xl font-light text-slate-900">
          Welcome Back
        </h2>

        <p className="mb-8 text-center text-sm text-slate-600">
          Sign in to continue shopping
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-slate-900/10 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-slate-900/10 focus:outline-none"
          />

          {/* Forgot password */}
          <div className="text-right">
            <button
              type="button"
              className="text-xs text-slate-500 transition-colors hover:text-slate-900"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-sm bg-slate-900 py-3 text-xs font-medium tracking-widest text-white uppercase shadow-md transition-all duration-300 hover:bg-slate-800"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 h-px bg-slate-200" />

        <p className="text-center text-sm text-slate-600">
          Don’t have an account?{" "}
          <span className="cursor-pointer text-slate-900 hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl w-full max-w-md">
        <h2 className="text-4xl font-extrabold text-white mb-6 text-center">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-white/20 focus:bg-white/30 focus:ring-2 focus:ring-purple-300 text-white placeholder-gray-200"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg bg-white/20 focus:bg-white/30 focus:ring-2 focus:ring-purple-300 text-white placeholder-gray-200"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 focus:bg-white/30 focus:ring-2 focus:ring-purple-300 text-white placeholder-gray-200"
          />

          <button
            type="submit"
            className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-lg focus:ring-4 focus:ring-purple-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-white text-center mt-6">
          Already have an account?{" "}
          <a href="#" className="font-bold hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

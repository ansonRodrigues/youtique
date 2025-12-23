import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-20 bg-white px-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <div className="relative flex items-center h-full max-w-7xl mx-auto">
        {/* Logo */}
        <img src={assets.logo} alt="Youtique" className="w-36" />

        {/* Center links */}
        <ul
          className="
            hidden lg:flex absolute left-1/2 -translate-x-1/2
            items-center gap-10
            text-[15px] font-light tracking-wide text-[#3A2E2A]

            [&_a]:relative
            [&_a]:transition-colors
            [&_a:hover]:text-[#C9A24D]

            [&_a::after]:content-['']
            [&_a::after]:absolute
            [&_a::after]:left-0
            [&_a::after]:-bottom-1
            [&_a::after]:h-px
            [&_a::after]:w-0
            [&_a::after]:bg-[#C9A24D]
            [&_a::after]:transition-all
            [&_a::after]:duration-300
            [&_a:hover::after]:w-full
          "
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/collections">Collection</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-6 ml-auto">
          <img
            src={assets.loginImg}
            alt="Login"
            className="w-5 cursor-pointer opacity-80 hover:opacity-100 transition"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

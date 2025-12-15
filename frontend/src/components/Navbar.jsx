import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-20 bg-white px-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="relative flex items-center h-full max-w-7xl mx-auto">
        <img src={assets.logo} alt="Youtique" className="w-36" />

        <ul
          className="
            hidden lg:flex absolute left-1/2 -translate-x-1/2
            items-center gap-10
            text-[15px] font-light tracking-wide text-gray-800

            [&_a]:relative
            [&_a]:transition-colors
            [&_a:hover]:text-gray-500

            [&_a::after]:content-['']
            [&_a::after]:absolute
            [&_a::after]:left-0
            [&_a::after]:-bottom-1
            [&_a::after]:h-px
            [&_a::after]:w-0
            [&_a::after]:bg-gray-400
            [&_a::after]:transition-all
            [&_a::after]:duration-300
            [&_a:hover::after]:w-full
          "
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

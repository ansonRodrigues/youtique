import React from "react";
import { Search, ShoppingBag, UserRound } from "lucide-react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 h-20 border-b border-slate-200/40 bg-white/60 backdrop-blur-lg">
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="Youtique"
          className="w-44 opacity-90 transition hover:opacity-100"
        />

        {/* Center Nav */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-[15px] font-light tracking-wide text-slate-600 lg:flex [&_a]:relative [&_a]:transition-colors [&_a::after]:absolute [&_a::after]:-bottom-1 [&_a::after]:left-0 [&_a::after]:h-px [&_a::after]:w-0 [&_a::after]:bg-slate-400 [&_a::after]:transition-all [&_a::after]:duration-300 [&_a::after]:content-[''] [&_a:hover]:text-slate-900 [&_a:hover::after]:w-full">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/collections">Collection</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>

        {/* Right Icons */}
        <div className="ml-auto flex items-center gap-6">
          {/* Search */}
          <Search
            size={24}
            strokeWidth={1.75}
            className="cursor-pointer text-slate-700/70 transition hover:text-slate-900"
          />

          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingBag
              size={24}
              strokeWidth={1.75}
              className="text-slate-700/70 transition hover:text-slate-900"
            />
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[10px] text-white">
              2
            </span>
          </Link>

          {/* Login */}
          <UserRound
            size={24}
            strokeWidth={1.75}
            className="cursor-pointer text-slate-700/70 transition hover:text-slate-900"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

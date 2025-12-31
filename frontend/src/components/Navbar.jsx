import React from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-20 bg-white px-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <div className="relative mx-auto flex h-full max-w-7xl items-center">
        <img src={assets.logo} alt="Youtique" className="w-45" />

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-[15px] font-light tracking-wide text-[#3A2E2A] lg:flex [&_a]:relative [&_a]:transition-colors [&_a::after]:absolute [&_a::after]:-bottom-1 [&_a::after]:left-0 [&_a::after]:h-px [&_a::after]:w-0 [&_a::after]:bg-[#C9A24D] [&_a::after]:transition-all [&_a::after]:duration-300 [&_a::after]:content-[''] [&_a:hover]:text-[#C9A24D] [&_a:hover::after]:w-full">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/collections">Collection</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>

        <div className="ml-auto flex items-center gap-6">
          <img
            src={assets.searchIcon}
            alt="Search"
            className="w-5 cursor-pointer opacity-80 transition hover:opacity-100"
          />

          <Link to="/cart" className="relative inline-block">
            <img
              src={assets.cart}
              alt="Cart"
              className="w-5 opacity-80 transition hover:opacity-100"
            />
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#C9A24D] text-[10px] text-white">
              2
            </span>
          </Link>

          <img
            src={assets.loginImg}
            alt="Login"
            className="w-5 cursor-pointer opacity-80 transition hover:opacity-100"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

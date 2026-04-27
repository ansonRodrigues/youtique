import React from "react";
import { Search, ShoppingBag, UserRound } from "lucide-react";
import { assets } from "../../assets/assets";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 h-20 border-b border-slate-200/40 bg-white/60 backdrop-blur-lg">
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        {/* Logo - Now clickable to return home */}
        <Link to="/" className="shrink-0">
          <img
            src={assets.logo}
            alt="Youtique"
            className="w-44 opacity-90 transition hover:opacity-100"
          />
        </Link>

        {/* Center Nav - Added <li> wrappers for semantic HTML */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-[15px] font-light tracking-wide text-slate-600 lg:flex [&_a]:relative [&_a]:transition-colors [&_a::after]:absolute [&_a::after]:-bottom-1 [&_a::after]:left-0 [&_a::after]:h-px [&_a::after]:w-0 [&_a::after]:bg-slate-400 [&_a::after]:transition-all [&_a::after]:duration-300 [&_a::after]:content-[''] [&_a:hover]:text-slate-900 [&_a:hover::after]:w-full">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/collections">Collection</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="ml-auto flex items-center gap-6">
          {/* Search - Wrapped in button for accessibility */}
          <button
            aria-label="Open search"
            className="text-slate-700/70 transition hover:text-slate-900"
          >
            <Search size={24} strokeWidth={1.75} />
          </button>

          {/* Cart - Hover effects moved to the parent Link */}
          <Link
            to="/cart"
            aria-label="View cart"
            className="relative text-slate-700/70 transition hover:text-slate-900"
          >
            <ShoppingBag size={24} strokeWidth={1.75} />
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[10px] text-white">
              2
            </span>
          </Link>

          {/* Login - Wrapped in Link (or change to button if it triggers a modal) */}
          <Link
            to="/login"
            aria-label="User profile"
            className="text-slate-700/70 transition hover:text-slate-900"
          >
            <UserRound size={24} strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

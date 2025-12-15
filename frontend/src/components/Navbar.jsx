import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="h-16 flex items-center border-b">
      <img src={assets.logo} alt="" className="w-40" />
    </div>
  );
};

export default Navbar;

import React from "react";
import { assets } from "../assets/assets";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <img
        src={assets.notfoundPage}
        alt="404 Page Not Found"
        className="w-full max-w-170 h-auto -translate-y-16"
      />
    </div>
  );
};

export default NotFound;

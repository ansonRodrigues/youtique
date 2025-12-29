import React from "react";
import { assets } from "../assets/assets";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <img
        src={assets.notfoundPage}
        alt="404 Page Not Found"
        className="h-auto w-full max-w-170 -translate-y-16"
      />
    </div>
  );
};

export default NotFound;

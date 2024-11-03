import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center py-44">
      <span className="font-Nunito font-medium text-8xl text-black">404</span>
      <p className="text-black font-Nunito font-normal text-3xl">
        Page not found
      </p>
      <Link to={"/"}>
        <button className="bg-blue mt-4 text-white font-Nunito py-2 px-3 text-xl">
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default Error;

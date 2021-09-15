import React from "react";

const Input = ({ type = "text", placeholder }) => {
  return (
    <input
      type={type}
      className="border-gray-300 rounded-lg py-3.5 px-4 border-2 text-lg focus:outline-none focus:ring-3 focus:border-blue-500  w-full"
      placeholder={placeholder}
    />
  );
};

export default Input;

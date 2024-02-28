/* eslint-disable react/prop-types */
// import React from "react";

export default function Button({ name, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="text-white bg-gray-800 hover:bg-gray-700 font-medium rounded-lg text-sm w-150  px-5 py-2.5 text-center"
      >
        {name}
      </button>
    </div>
  );
}

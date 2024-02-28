/* eslint-disable react/prop-types */
// import React from "react";

export default function Button({ name }) {
  return (
    <div>
      <button className=" text-white bg-gray-800 hover:bg-gray-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
        {name}
      </button>
    </div>
  );
}

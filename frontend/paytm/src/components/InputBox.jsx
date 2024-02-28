/* eslint-disable react/prop-types */
// import React from "react";

export function InputBox({ type, label, placeholder, onChange, value }) {
  return (
    <div className="flex flex-col justify-center h-42 w-full  py-1 px-8">
      <div className="text-sm font-medium py-2 text-left">{label}</div>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="h-10 px-2 rounded-md border-2 border-gray-700"
        value={value}
      />
    </div>
  );
}

/* eslint-disable react/prop-types */
// import React from "react";

export function InputBox({ type, label, placeholder, onChange, value }) {
  return (
    <div className="flex flex-col justify-center w-90 h-23 py-1">
      <div className="text-sm font-medium py-2 text-left">{label}</div>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="w-120 h-22 px-2 rounded-md border-2 border-gray-700"
        value={value}
      />
    </div>
  );
}

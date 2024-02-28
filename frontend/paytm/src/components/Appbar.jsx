// import React from "react";

export default function Appbar() {
  return (
    <div className="shadow-md h-14 flex flex-row justify-between w-[100%]">
      <div className="text-2xl font-semibold px-7">Paytm App</div>
      <div className="flex flex-row">
        <div className="text-md">Hello, User </div>
        <div className="ml-3">
          <img
            className="w-10 h-10 rounded-full"
            src="https://img.freepik.com/free-vector/portrait-boy-with-brown-hair-brown-eyes_1308-146018.jpg?size=626&ext=jpg"
            alt="Rounded avatar"
          />
        </div>
      </div>
    </div>
  );
}

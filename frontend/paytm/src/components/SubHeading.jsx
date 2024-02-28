/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";

import React from "react";

export default function SubHeading({ label }) {
  const parts = label.split("\n").map((part, index) => (
    <React.Fragment key={index}>
      {part}
      <br />
    </React.Fragment>
  ));

  return <div className="p-2 italic text-lg text-gray-600 ">{parts}</div>;
}

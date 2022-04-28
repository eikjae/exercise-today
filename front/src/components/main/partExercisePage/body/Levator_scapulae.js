import React from "react";

export default function Levator_scapulae({
  fill,
  onClick,

}) {
  return (
    <svg
      style={{
        fill: fill === undefined ? "#cdcccc" : fill,
        fillOpacity: 1,
        stroke: "gray",
        strokeMiterlimit: "1",
        cursor: "pointer",
        opacity: fill === undefined ? 0 : 1,
      }}
      onClick={onClick}

    >
      <path
        className="bt17"
        d="M339.7,25.7c-0.4,0-0.8-0.1-1.2-0.1c-0.3,1-1,2.1-0.9,3.1c0.6,7.1,1.3,14.2,2,21.3c0.3,3.3,0.7,3.8,4,2.7
	c4.2-1.2,8.2-2.5,12.1-3.8c-2.3-1.8-5.1-3.9-7.8-6C342.2,38.7,337.9,33.7,339.7,25.7z"
      />
      <path
        className="bt18"
        d="M317.8,49.2c3.7,1.1,7.6,2.3,11.6,3.5c3.5,1.1,4,0.8,4.3-2.7c0.1-0.7,0.2-1.4,0.3-2.1
	c1.3-6.4,2.3-12.8,1.8-19.4c-0.3-1-0.6-2-1.1-2.9c-0.3,0.1-0.5,0.2-0.8,0.3c0.1,0.9,0.3,1.8,0.4,2.8c0.3,4.5-1.7,8.8-5.2,11.6
	C325.1,43.3,321.2,46.3,317.8,49.2z"
      />
    </svg>
  );
}

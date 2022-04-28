import React from "react";

export default function Glutes({ fill, onClick, onMouseOver, onMouseLeave }) {
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
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <path
        class="bt3"
        d="M313.4,167.6c2.9-4.6,7.3-6.7,11.6-8.8c0.7-0.3,1.4-0.7,2.1-1.1c3.2-2,4.1-4.1,3.3-7.9
    c-0.8-4.7-1.7-9.2-2.3-14c-0.7-5.1-1.3-5.6-6-3.3c-0.1,0-0.1,0.1-0.2,0.1c-9.1,4.5-13.4,14.7-10.7,26.1
    C311.9,161.4,312.6,163.9,313.4,167.6z"
      />
      <path
        class="bt37"
        d="M333.9,152.7c0.4-0.1,0.7-0.2,1.1-0.2c0-1.8,0.1-3.5,0.4-5.3c1-5.1-0.1-9.1-6.2-11.4
    C330.9,141.7,332.4,147.2,333.9,152.7z"
      />
      <path
        class="bt38"
        d="M338.4,152.4c3.1-4.8,4.8-10.3,4.9-16c-4.4,1.6-6.1,4.5-5.5,8.7C338.2,147.5,338.2,149.8,338.4,152.4z"
      />
      <path
        class="bt4"
        d="M360.4,166.6c0.7-4.1,1.9-8.6,2.2-13.2c0.8-10.1-4.3-18.5-13.1-21.7c-3-1.1-3.8-0.6-4.2,2.5l-2.1,13.5
    c-1.2,6.8-0.5,8,5.7,11.5C352.8,161.2,356.4,163.9,360.4,166.6z"
      />
    </svg>
  );
}

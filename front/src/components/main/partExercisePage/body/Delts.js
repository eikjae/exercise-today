import React from "react";

export default function Delts({ fill, onClick, onMouseOver, onMouseLeave }) {
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
      <g>
        <path
          className="pt32"
          d="M138,68.4c6.9-5.1,12.7-11.4,21.3-13.5c-4.3-3.3-13.1-1.8-16.2,4.6C141.5,62.4,139.8,65.3,138,68.4z"
        />
        <path
          className="pt31"
          d="M191.3,68.4c-1.9-3.2-3.7-6.2-5.3-9.2c-1.5-2.9-4.2-5-7.4-5.8c-2.9-0.8-6.5-0.2-8.4,1.6
          C178.9,57.3,184.4,63.5,191.3,68.4z"
        />
      </g>
      <g>
        <path
          className="bt19"
          d="M312.2,56.8c-3.9-2.6-8.6-2.9-11.5-0.8c-4.8,3.7-6.8,13.4-3.5,18.5C302.3,68.6,307.2,62.6,312.2,56.8z"
        />
        <path
          className="bt23"
          d="M321,74.9c-2-4.9-3.7-8.8-5.5-12.9c-0.8-1.7-2.3-2.5-3.9-1.1c-3.4,2.8-5.7,6.8-6.5,11.1
          C310.4,73.1,315.3,73.9,321,74.9z"
        />
        <path
          className="bt20"
          d="M361.1,56.8c5.1,6,10,11.9,15,17.7c0.3-0.1,0.7-0.2,1-0.3c0.1-2.9,0.7-6,0.3-8.9
          C376.3,55.5,368.8,51.9,361.1,56.8z"
        />
        <path
          className="bt24"
          d="M352.3,74.9c5.7-1,10.6-1.9,15.7-2.9c-0.6-4.3-2.8-7.3-5.4-10.1c-2.1-2.3-3.9-2.1-5.2,0.7
          C355.7,66.4,354.3,70.2,352.3,74.9z"
        />
      </g>
    </svg>
  );
}

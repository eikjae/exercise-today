import React from "react";

export default function Triceps({ fill, onClick, onMouseOver, onMouseLeave }) {
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
          className="pt88"
          d="M122.9,104.9c4.4-1.5,7.8-4.9,9.2-9.3c0.3,0.3,0.6,0.7,0.9,1C129.7,99.5,126.3,102.3,122.9,104.9z"
        />
        <path
          className="pt90"
          d="M205.9,105.4l0.8-0.8c-3.7-2.8-7.4-5.7-11.1-8.5l1-1C198.1,99.7,201.5,103.4,205.9,105.4z"
        />
      </g>
      <g>
        <path
          className="bt49"
          d="M292.1,98.9c1.5-7.2,3-14.3,4.8-22.2C292.4,83.9,291.9,91.4,292.1,98.9z"
        />
        <path
          className="bt52"
          d="M297,86.4h-1c-0.6,4.1-1.2,8.2-1.6,12.3c-0.1,0.7,0.9,1.4,1.4,2.1c0.5-0.6,0.9-1.3,1.1-2
    c0.2-2,0.1-4.1,0.1-6.2V86.4z"
        />
        <path
          className="bt22"
          d="M298.6,103.9c3.8-3.7,6.3-8.1,6.3-13.4c-0.1-6.7-0.9-13.4-1.4-20.2c-4.3,4.4-6.2,10.6-5.2,16.7
    C299,92.7,299.9,98.2,298.6,103.9z"
        />
        <path
          className="bt21"
          d="M369.9,70.2c-0.4,4.3-0.8,8.1-1.1,12.1c-0.3,3.2-0.4,6.3-0.3,9.5c0.6,4.4,2.5,8.5,5.5,11.8
    c0.4-5.9,0.5-12,1.1-17.9C375.9,79.8,373.6,74.9,369.9,70.2z"
        />
        <path
          className="bt50"
          d="M376.4,76.7c1.6,7.8,3.3,15.4,5,23C381.6,91.8,381,83.8,376.4,76.7z"
        />
        <path
          className="bt51"
          d="M377.3,86.4h-0.8c0,4.2-0.1,8.3,0.1,12.5c0,0.6,0.8,1.2,1.2,1.9c0.5-0.7,1.4-1.4,1.3-2
    C378.5,94.5,377.9,90.4,377.3,86.4z"
        />
      </g>
    </svg>
  );
}

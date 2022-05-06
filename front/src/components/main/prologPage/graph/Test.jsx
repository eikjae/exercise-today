import React from "react";
import { Treemap } from "recharts";

const data = [
  {
    name: "back",
    children: [
      { name: "upper back", size: 88 },
      { name: "lats", size: 81 },
      { name: "spine", size: 19 },
      { name: "traps", size: 15 },
    ],
  },
  {
    name: "cardio",
    children: [{ name: "cardiovascular system", size: 29 }],
  },
  {
    name: "chest",
    children: [
      { name: "pectorals", size: 158 },
      { name: "serratus anteriort", size: 5 },
    ],
  },
  {
    name: "lower arms",
    children: [{ name: "forearms", size: 37 }],
  },
  {
    name: "lower legs",
    children: [{ name: "calves", size: 57 }],
  },
  {
    name: "neck",
    children: [{ name: "levator scapulae", size: 2 }],
  },
  {
    name: "shoulders",
    children: [{ name: "delts", size: 144 }],
  },
  {
    name: "upper arms",
    children: [
      { name: "biceps", size: 150 },
      { name: "triceps", size: 141 },
    ],
  },
  {
    name: "upper legs",
    children: [
      { name: "glutes", size: 144 },
      { name: "quads", size: 44 },
      { name: "hamstrings", size: 27 },
      { name: "adductors", size: 6 },
      { name: "abductorse", size: 5 },
    ],
  },
  {
    name: "waist",
    children: [{ name: "abs", size: 170 }],
  },
];

const COLORS = [
  "#8889DD",
  "#9597E4",
  "#8DC77B",
  "#A5D297",
  "#E2CF45",
  "#F8C12D",
];

function CustomizedContent({
  root,
  depth,
  x,
  y,
  width,
  height,
  index,
  payload,
  colors,
  rank,
  name,
}) {
  return (
    <g>
      <rect
        onMouseEnter={() => {
          console.log("hello");
        }}
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill:
            depth < 2
              ? colors[Math.floor((index / root.children.length) * 6)]
              : "none",
          stroke: "#fff",
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 ? (
        <text
          x={x + width / 2}
          y={y + height / 2 + 7}
          textAnchor="middle"
          fill="#000"
          fontSize={14}
        >
          {name}
        </text>
      ) : null}
      {depth === 1 ? (
        <text x={x + 4} y={y + 18} fill="#000" fontSize={16} fillOpacity={0.9}>
          {index + 1}
        </text>
      ) : null}
    </g>
  );
}

export default function Example() {
  return (
    <Treemap
      width={400}
      height={350}
      data={data}
      dataKey="size"
      ratio={4 / 3}
      stroke="#fff"
      fill="#8884d8"
      content={<CustomizedContent colors={COLORS} />}
    ></Treemap>
  );
}

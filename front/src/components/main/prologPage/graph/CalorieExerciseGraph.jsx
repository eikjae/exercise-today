import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const data = [
  {
    name: "1 ~ 2",
    // uv: 590,
    운동개수: 55,
    // amt: 1400,
  },
  {
    name: "2 ~ 3",
    // uv: 868,
    운동개수: 102,
    // amt: 1506,
  },
  {
    name: "300 이하",
    // uv: 1397,
    운동개수: 66,
    // amt: 989,
  },
  {
    name: "400 이하",
    // uv: 1480,
    운동개수: 17,
    // amt: 1228,
  },
  {
    name: "500 이하",
    // uv: 1520,
    운동개수: 8,
    // amt: 1100,
  },
];

export default function CalorieExerciseGraph() {
  const COLORS = ["#1f77b4", "#ff7f0e", "#2ca02c"];

  return (
    <ComposedChart
      layout="vertical"
      width={370}
      height={320}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis
        dataKey="name"
        type="category"
        scale="band"
        label={{
          value: "100kcal",
          angle: -90,
          position: "insideLeft",
          fill: "grey",
        }}
      />
      <Tooltip />
      <Legend />
      {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
      <Bar
        dataKey="운동개수"
        barSize={30}
        fill="#413ea0"
        isAnimationActive={true}
        key={Math.random()}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Bar>
      {/* <Line dataKey="uv" stroke="#ff7300" /> */}
    </ComposedChart>
  );
}

import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

export default function PartExerciseGraph() {
  // 세부 부위별 운동 개수
  const targetExerciseData = [
    { name: "upper arms", value: 291 },
    { name: "cardio", value: 29 },
    { name: "lower arms", value: 37 },
    { name: "lower legs", value: 57 },
    { name: "shouders", value: 144 },
    { name: "neck", value: 2 },
    { name: "chest", value: 163 },
    { name: "waist", value: 170 },
    { name: "back", value: 203 },
    { name: "upper legs", value: 226 },
  ];

  const COLORS = ["#1f77b4", "#ff7f0e", "#2ca02c"];

  return (
    <div className="App">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={targetExerciseData}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          <Cell key={`cell-0`} fill={COLORS[1]} />
          <Cell key={`cell-1`} fill={COLORS[2]} />
          <Cell key={`cell-2`} fill={COLORS[1]} />
          <Cell key={`cell-3`} fill={COLORS[2]} />
          <Cell key={`cell-4`} fill={COLORS[1]} />
          <Cell key={`cell-5`} fill={COLORS[2]} />
          <Cell key={`cell-6`} fill={COLORS[0]} />
          <Cell key={`cell-7`} fill={COLORS[2]} />
          <Cell key={`cell-8`} fill={COLORS[1]} />
          <Cell key={`cell-9`} fill={COLORS[2]} />
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

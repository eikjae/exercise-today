import React from "react";
import { Tooltip, BarChart, XAxis, YAxis, Bar, Cell, Legend } from "recharts";

export default function HeartStrokeGraph() {
  // 심장병과 BMI의 관계
  const StrokesData = [
    { name: "Overweight", value: (115 / (115 + 1495)).toFixed(5) },
    { name: "Ideal", value: (37 / (37 + 1159)).toFixed(5) },
    { name: "Underweight", value: (1 / (1 + 410)).toFixed(5) },
  ];

  const COLORS = ["red", "skyblue", "#2ca02c"];

  return (
    <div className="App">
      <BarChart width={400} height={400} data={StrokesData}>
        <Tooltip />
        <Legend />
        <Bar barSize={30} dataKey="value" fill="#8884d8">
          {StrokesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </div>
  );
}

import React from "react";
import { Tooltip, BarChart, XAxis, YAxis, Bar, Cell, Legend } from "recharts";

export default function HeartStrokeGraph() {
  // 심장병과 BMI의 관계
  const StrokesData = [
    { name: "비만", 체중: (115 / (115 + 1495)).toFixed(5) },
    { name: "정상", 체중: (37 / (37 + 1159)).toFixed(5) },
    { name: "저체중", 체중: (1 / (1 + 410)).toFixed(5) },
  ];

  const COLORS = ["#F32424", "#8FBDD3", "#2ca02c"];

  return (
    <div className="App">
      <BarChart width={400} height={400} data={StrokesData}>
        <Tooltip />
        <Legend />
        <Bar barSize={30} dataKey="체중" fill="#8884d8">
          {StrokesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
        <XAxis dataKey="name" />
        <YAxis
          label={{
            value: "심장병 발병률",
            angle: -90,
            position: "insideLeft",
            fill: "grey",
          }}
        />
      </BarChart>
    </div>
  );
}

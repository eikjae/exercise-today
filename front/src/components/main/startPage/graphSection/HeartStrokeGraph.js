import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Cell,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
  Brush,
} from "recharts";

export default function HeartStrokeGraph() {
  // 심장병과 BMI의 관계
  const StrokesData = [
    { name: "Overweight", value: 115 / (115 + 1495) },
    { name: "Ideal", value: 37 / (37 + 1159) },
    { name: "Underweight", value: 1 / (1 + 410) },
  ];

  const COLORS = ["#1f77b4", "#ff7f0e", "#2ca02c"];

  return (
    <div className="App">
      <BarChart width={400} height={400} data={StrokesData}>
        <Bar dataKey="value" fill="#8884d8">
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

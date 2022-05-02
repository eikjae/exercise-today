import React from "react";
import {
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

export default function WeightGraph() {
  // 몸무게 그래프
  const weightData = [
    { name: "1일", kg: 70 },
    { name: "2일", kg: 69.8 },
    { name: "3일", kg: 70.1 },
    { name: "4일", kg: 70.2 },
    { name: "5일", kg: 70.5 },
    { name: "6일", kg: 70.3 },
    { name: "7일", kg: 70.1 },
  ];

  const minWeight = 69.8;
  const maxWeight = 70.05;

  return (
    <div className="App">
      <LineChart
        width={500}
        height={200}
        data={weightData}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[minWeight, maxWeight]} />
        <Tooltip />
        <Line type="monotone" dataKey="kg" stroke="#000000" fill="#000000" />
      </LineChart>
    </div>
  );
}

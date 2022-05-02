import React from "react";
import "./App.css";
import {
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Brush,
} from "recharts";

function App() {
  // 운동의 칼로리 그래프
  const calorieData = [
    { name: "1일", pv: 2400 },
    { name: "2일", pv: 1398 },
    { name: "3일", pv: 9800 },
    { name: "4일", pv: 3908 },
    { name: "5일", pv: 4800 },
    { name: "6일", pv: 3800 },
    { name: "7일", pv: 4300 },
  ];

  return (
    <div className="App">
      <LineChart
        width={500}
        height={200}
        data={calorieData}
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
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        <Brush />
      </LineChart>
    </div>
  );
}

export default App;

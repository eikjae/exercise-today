import React from "react";
import "./App.css";
import {
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

function App() {
  // 식단과 운동의 칼로리 그래프
  const calorieData = [
    { name: "1일", uv: 1000 },
    { name: "2일", uv: 1300 },
    { name: "3일", uv: 1200 },
    { name: "4일", uv: 1780 },
    { name: "5일", uv: 1890 },
    { name: "6일", uv: 1090 },
    { name: "7일", uv: 1490 },
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
        <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </LineChart>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

function App() {
  // 연도별 음악 개수
  const musicData = [
    { name: "2014", value: 1237 },
    { name: "2015", value: 1330 },
    { name: "2016", value: 1529 },
    { name: "2017", value: 1630 },
    { name: "2018", value: 2125 },
    { name: "2019", value: 2114 },
    { name: "2020", value: 1860 },
  ];

  const COLORS = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
  ];

  return (
    <div className="App">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={musicData}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          <Cell key={`cell-0`} fill={COLORS[0]} />
          <Cell key={`cell-1`} fill={COLORS[1]} />
          <Cell key={`cell-2`} fill={COLORS[2]} />
          <Cell key={`cell-3`} fill={COLORS[0]} />
          <Cell key={`cell-4`} fill={COLORS[1]} />
          <Cell key={`cell-5`} fill={COLORS[2]} />
          <Cell key={`cell-6`} fill={COLORS[0]} />
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default App;

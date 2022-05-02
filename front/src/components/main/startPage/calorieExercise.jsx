import React from "react";
import "./App.css";
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Cell,
} from "recharts";

function App() {
  // 칼로리 범위마다 해당되는 운동 개수 (단, 60kg 기준)
  const ExerciseData = [
    { name: "<100", value: 55 },
    { name: "<200", value: 102 },
    { name: "<300", value: 66 },
    { name: "<400", value: 17 },
    { name: "<500", value: 8 },
  ];

  const COLORS = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
  ];

  return (
    <div className="App">
      <BarChart width={400} height={400} data={ExerciseData}>
        <Bar dataKey="value" fill="#8884d8">
          {ExerciseData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </div>
  );
}

export default App;

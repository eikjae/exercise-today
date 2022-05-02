import React from "react";
import "./App.css";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  Legend,

} from "recharts";

function App() {

  // 당뇨병과 건강관리의 관계
  const DiabetesData = [
    {
      name: "Diabetes",
      no_physical_activity: 13059,
      physical_activity: 22287,
    },
    {
      name: "No Diabetes",
      no_physical_activity: 48701,
      physical_activity: 169633,
    },
  ];

  return (
    <div className="App">
      <BarChart
        width={500}
        height={300}
        data={DiabetesData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="no_physical_activity" fill="#8884d8" />
        <Bar dataKey="physical_activity" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default App;

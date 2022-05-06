import React from "react";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  Legend,
} from "recharts";

export default function DiabetesGraph() {
  // 당뇨병과 건강관리의 관계
  const DiabetesData = [
    {
      name: "당뇨병 환자",
      운동X: Number((13059 / 10000).toFixed(1)),
      운동O: Number((22287 / 10000).toFixed(1)),
    },
    {
      name: "정상인",
      운동X: Number((48701 / 10000).toFixed(1)),
      운동O: Number((169633 / 10000).toFixed(1)),
    },
  ];

  return (
    <div className="App">
      <BarChart
        width={400}
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
        <YAxis
          label={{
            value: "사람 (만 명)",
            angle: -90,
            position: "insideCenter",
            fill: "grey",
          }}
        />
        <Tooltip />
        <Legend />
        <Bar barSize={30} dataKey="운동X" fill="#8884d8" />
        <Bar barSize={30} dataKey="운동O" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

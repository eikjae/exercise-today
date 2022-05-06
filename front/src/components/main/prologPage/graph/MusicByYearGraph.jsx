import React from "react";
import { PieChart, Pie, Tooltip, Cell, Text, LabelList } from "recharts";

export default function MusicByYearGraph() {
  // 연도별 음악 개수
  const musicData = [
    { name: "2014년", value: 1237 },
    { name: "2015년", value: 1330 },
    { name: "2016년", value: 1529 },
    { name: "2017년", value: 1630 },
    { name: "2018년", value: 2125 },
    { name: "2019년", value: 2114 },
    { name: "2020년", value: 1860 },
  ];

  const COLORS = ["#1f77b4", "#ff7f0e", "#2ca02c"];
  const textAnchor = (x, cx) => {
    if (x > cx) return "start";
    else return "end";
  };
  const label = ({ name, value, cx, x, y }) => {
    return (
      <>
        <Text x={x} y={y} textAnchor={textAnchor(x, cx)} fill="#8884d8">
          {name}
        </Text>
        <Text
          x={x}
          y={y}
          dominantBaseline="hanging"
          textAnchor={textAnchor(x, cx)}
          fill="#82ca9d"
        >
          {value + "곡"}
        </Text>
      </>
    );
  };

  return (
    <div className="App">
      <PieChart width={400} height={400}>
        <Tooltip />
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={musicData}
          cx="50%"
          cy="50%"
          key={Math.random()}
          outerRadius={120}
          fill="#8884d8"
          label={label}
        >
          <Cell key={`cell-0`} fill={COLORS[0]} />
          <Cell key={`cell-1`} fill={COLORS[1]} />
          <Cell key={`cell-2`} fill={COLORS[2]} />
          <Cell key={`cell-3`} fill={COLORS[0]} />
          <Cell key={`cell-4`} fill={COLORS[1]} />
          <Cell key={`cell-5`} fill={COLORS[2]} />
          <Cell key={`cell-6`} fill={COLORS[0]} />
          {/* <LabelList dataKey="name" position="insideBottom" /> */}
        </Pie>
      </PieChart>
    </div>
  );
}

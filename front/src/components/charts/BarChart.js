import React from "react";
import {
  BarChart as Barchart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const tickFormatter = (name) => {
  const limit = 20;
  if (name && name.length < 10) return name;
  return name && `${name.substring(0, limit)}...`;
};

const BarChart = ({ data, colors }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <Barchart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" tickFormatter={tickFormatter} interval={0} />
        <YAxis
          label={{
            value: "시간",
            angle: -90,
            position: "insideLeft",
            fill: "grey",
          }}
        />
        <Tooltip />
        <Bar
          isAnimationActive
          dataKey="hour"
          fill="#8884d8"
          barSize={40}
          label={{ position: "top" }}
        >
          {data?.map((d, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]}></Cell>
          ))}
        </Bar>
      </Barchart>
    </ResponsiveContainer>
  );
};

export default BarChart;

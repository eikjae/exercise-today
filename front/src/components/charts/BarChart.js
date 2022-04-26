import React from "react";
import {
  BarChart as Barchart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const tickFormatter = (name) => {
  const limit = 8;
  if (name && name.length < 10) return name;
  return name && `${name.substring(0, limit)}...`;
};

const BarChart = ({ data }) => {
  // console.log(data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <Barchart
        key={Math.round(Math.random() * 10000)}
        data={data?.map((d) => {
          const time = d.time.split("시간");
          const hour = Number(time[0]);
          const min = Number(time[1].replace("분", "")) / 60;
          return {
            name: d.name,
            hour: Number((hour + min).toFixed(2)),
            hours: d.time,
          };
        })}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" tickFormatter={tickFormatter} interval={0} />
        <YAxis label={{ value: "hour", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="hour" fill="#8884d8" barSize={40} />
      </Barchart>
    </ResponsiveContainer>
  );
};

export default BarChart;

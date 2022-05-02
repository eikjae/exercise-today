import React, { PureComponent } from "react";
import "./App.css";
import {
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
} from "recharts";

function App() {
  // 식단과 운동의 칼로리 그래프
  const calorieData = [
    { name: "1일", uv: 4000, pv: 2400 },
    { name: "2일", uv: 3000, pv: 1398 },
    { name: "3일", uv: 2000, pv: 9800 },
    { name: "4일", uv: 2780, pv: 3908 },
    { name: "5일", uv: 1890, pv: 4800 },
    { name: "6일", uv: 2390, pv: 3800 },
    { name: "7일", uv: 3490, pv: 4300 },
  ];

  class CustomizedLabel extends PureComponent {
    render() {
      const { x, y, stroke, value } = this.props;

      return (
        <text
          x={x}
          y={y}
          dy={-4}
          fill={stroke}
          fontSize={10}
          textAnchor="middle"
        >
          {value}
        </text>
      );
    }
  }

  class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, payload } = this.props;

      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={0}
            y={0}
            dy={16}
            textAnchor="end"
            fill="#666"
            transform="rotate(-35)"
          >
            {payload.value}
          </text>
        </g>
      );
    }
  }

  return (
    <div className="App">
      <LineChart
        width={500}
        height={300}
        data={calorieData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          label={<CustomizedLabel />}
        />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default App;

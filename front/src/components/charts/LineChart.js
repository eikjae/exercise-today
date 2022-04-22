import React from 'react';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import styled, {css} from 'styled-components';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const StyledChart = styled.div`
    width: 100%;
    max-width: 1000px;
`

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  // labels 대신 아래와 같이 각각의 데이터의 x값을 개별적으로 전달해줍니다.
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 2,
      data: [
        { x: "January", y: 1 },
        { x: "February", y: 2 },
        { x: "March", y: 3 },
        { x: "April", y: 4 },
        { x: "May", y: 5 },
      ],
    },
  ],
};

const LineChart = ({data}) => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line',
          },
        },
      };

    return(
        <StyledChart>
            <Line type="line" options={options} data={data}/>
        </StyledChart>
    )
};

export default LineChart;
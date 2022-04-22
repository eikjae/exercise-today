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
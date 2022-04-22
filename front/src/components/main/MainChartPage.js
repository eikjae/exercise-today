import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import styled, {css} from 'styled-components';
import LineChart from '../charts/LineChart';


const StyledGrid = styled.div`
        margin: auto;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        max-width: 1000px;
        height: 1000px;
        ${({theme}) => {
        return css`
        background-color: #222222;
        `
    }}
`

const StyledInfoWrapper = styled.div`
    background-color: gray;
`

const StyledSwitchWrapper = styled.div`
    background-color: #f8eaf1;
`

const StyledBottom = styled.div`
    background-color: lightblue;
    grid-column: 1/3;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: start;
`


const MainChartPage = (props) => {
    const [selectSwitch, setSelectSwitch] = useState([true, false, false])
    const {calorie, height, weight} = useParams();
  
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
      const handleOnClick = (e) => {
        setSelectSwitch(() => {
          const newSwitch = selectSwitch.map(s => false)
          newSwitch[e.target.value] = true
          setSelectSwitch(newSwitch)
          
        })
      }
    return (
        <StyledGrid >
            <StyledInfoWrapper>
              칼로리: {calorie}
              키 : {height}
              몸무게 :{weight}
            </StyledInfoWrapper>
            <StyledSwitchWrapper>
            <FormGroup>
                {selectSwitch?.map((s, index) => {
                  return <FormControlLabel control={<Switch checked={s === true} color="secondary" />} label="Label" value={index} onClick={handleOnClick}/>
                })}
            </FormGroup>
            </StyledSwitchWrapper>
            <StyledBottom>
                <LineChart data={data} />
            </StyledBottom>            
        </StyledGrid>
    )
};

export default MainChartPage;
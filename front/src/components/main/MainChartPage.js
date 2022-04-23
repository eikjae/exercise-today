import { FormControlLabel, Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import LineChart from '../charts/LineChart';
import { MainPageChip } from '../chips/StyledChip';
import { post } from '../../api'
import BarChart from '../charts/BarChart';

const StyledContainer = styled.div`
    max-width: 1200px;
    max-height: 1000px;
    margin: auto;
    padding: 20px;
`

const StyledTopGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    max-width: 1200px;
    ${({theme}) => theme.tablet`
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    `
}`

const StyledInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    background-color: gray;

    padding: 30px;
    margin: 10px;
    
    border-radius: 10px;
`

const StyledSwitchWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledSwitchContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #f8eaf1;
    height: 100%;

    padding: 30px;
    margin: 10px;

    border-radius: 10px;
`

const StyledBottom = styled.div`
    background-color: lightblue;
    grid-column: 1/3;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: start;

    padding: 30px;
    margin: 10px;

    border-radius: 10px;
    height: 50vh;
`

const StyledFormControlLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
`

const MainChartPage = (props) => {
    const [selectSwitch, setSelectSwitch] = useState([
        { 
            id: 0,
            isSelected: true,
            name: "유산소"
        },
        { 
            id: 1,
            isSelected: false,
            name: "무산소"
        },
        { 
            id: 2,
            isSelected: false,
            name: "구기"
        },
        { 
            id: 3,
            isSelected: false,
            name: "라켓"
        },
        { 
            id: 4,
            isSelected: false,
            name: "육상"
        },
        { 
            id: 5,
            isSelected: false,
            name: "수상"
        },
        { 
            id: 6,
            isSelected: false,
            name: "댄스"
        },
        { 
            id: 7,
            isSelected: false,
            name: "사이클"
        },
        { 
            id: 8,
            isSelected: false,
            name: "양궁"
        },
        { 
            id: 9,
            isSelected: false,
            name: "복싱"
        },
        { 
            id: 10,
            isSelected: false,
            name: "격투"
        },
        { 
            id: 11,
            isSelected: false,
            name: "기타"
        },
    ])
    const {calorie, height, weight} = useParams();
    const [graphData, setGraphData] = useState(null);

    const handleOnClick = async (e) => {
        const name = e.target.value;
        const index = e.target.id;
        try {
            const exerciseInfo = await post('exercise/timeinfo', {
                weight: Number(weight),
                category: name,
                calories: Number(calorie)
          })
            setGraphData(exerciseInfo)
            setNewSwitch(index);
        } catch(e) {
            throw new Error(e)
        }
    }

    const setNewSwitch = (index) => {
        setSelectSwitch(() => {
            const newSwitch = selectSwitch.map(s => {
                const newS = {...s};
                newS.isSelected = false
                return newS
            })
            newSwitch[index].isSelected = true
            setSelectSwitch(newSwitch)          
        })
    }

    useEffect(() => {
        try {
            const postGraphData = async () => {
                const exerciseInfo = await post('exercise/timeinfo', {
                    weight: Number(weight),
                    category: "유산소",
                    calories: Number(calorie)
                })
                setGraphData(exerciseInfo)
              }
            postGraphData();
        }catch(e) {
          throw new Error(e)
        }
    }, [calorie, weight])
    return (
        <StyledContainer>
            <StyledTopGrid >
                <StyledInfoWrapper>
                    <MainPageChip title={"오늘 섭취한 칼로리"} content={`${calorie}kcal`} />
                    <MainPageChip title={"키"} content={`${height}cm`} />
                    <MainPageChip title={"몸무게"} content={`${weight}kg`} />
                </StyledInfoWrapper>
                    <StyledSwitchWrapper>
                        <h2 style={{textAlign: "center"}}>원하는 운동을 선택해주세요</h2>
                        <StyledSwitchContainer>
                            {selectSwitch?.map((s, index) => {                        
                                return (
                                  <StyledFormControlLabel key={s.id}>
                                      <FormControlLabel control={<Switch color="secondary" onClick={handleOnClick} value={s.name} id={String(index)}/>} checked={s.isSelected === true} label={s.name}/>
                                  </StyledFormControlLabel>
                                )
                            })}
                        </StyledSwitchContainer>
                    </StyledSwitchWrapper>
            </StyledTopGrid>
            <h2 style={{textAlign: "center"}}>칼로리 소비를 위해 얼마나 운동해야 할까요?</h2>
            <StyledBottom>
                <BarChart data={graphData?.data}/>
            </StyledBottom>
        </StyledContainer>
    )
};

export default MainChartPage;
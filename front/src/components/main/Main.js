import React, { useState } from 'react';
import { Container } from '@mui/material';
import styled, { css } from 'styled-components';
import FruitButton from './FruitButton';

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* width: 100%; */
    /* height: 1000px; */
    /* overflow: auto; */
    ${({theme}) => {
        return css`
        background-color: ${theme.backgroundColor.main};
        `
    }}
`

const Title = styled.h1`    
    color: white;
    justify-self: center;
`

const FruitWrapper = styled.div`
    display: flex;
    /* margin: auto; */
    justify-content: start;
    flex-wrap: wrap;
`

const TotalWrapper = styled.p`
    color:white;
`

const foods = ["견과류","사탕","잼/버터","시리얼","치즈","케이크류","면류","빵류","육류","콩류",
"패스트푸드","아이스크림","주류","감자류","해산물","유제품","과일","수프","음료(알콜x)","채소"]

const Main = (props) => {
    const [total, setTotal] = useState(0)

    return (
        <StyledContainer maxWidth="xl">
            <Title>오늘 먹은 음식을 골라주세요!</Title>
            <FruitWrapper>
                {foods.map(food => {
                    return <FruitButton name={food} setTotal={setTotal} />
                })}
            </FruitWrapper>
            <TotalWrapper>
                {total}
            </TotalWrapper>
        </StyledContainer>
    )
};

export default Main;
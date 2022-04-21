import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 23%;
    min-width: 230px;
    height: 60px;
    background-color: lightgray; 
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    :nth-child(4n) {
        /* background-color: red; */
        /* margin-right: 0px; */
    }
`

const StyledName = styled.div`
    flex: 0.4;
    text-align: center;
`

const StyledCalculatorWrapper = styled.div`
    display: flex;
    flex: 0.3;
    flex-direction: column;
    align-items: center;
    height: 100%;
    font-size: 20px;
    border-left: 1px solid black;
    border-right: 1px solid black;
`

const StyledPlusMinus = styled.span`
    width: 100%;
    height: 50%;
    text-align: center;
    :hover {
        cursor: pointer;
        background-color: gray;
    }
`

const StyledP = styled.p`
    flex: 0.3;
    text-align: center;
    font-size: 20px;
    margin: 0;
`

const FruitButton = ({name, setTotal}) => {
    const [count, setCount] = useState(0)    
    return (
        <StyledWrapper>
            <StyledName>
                <h3 style={{margin: 0}}>{name}</h3>
            </StyledName>
            <StyledCalculatorWrapper>
                <StyledPlusMinus onClick={() => {
                    setTotal(current => {
                        return current + 1;
                    })
                    setCount((current) => {
                        return current + 1
                    })
                }}>+</StyledPlusMinus>
                <hr style={{width: "100%", margin: 0, borderTop : "1px solid black"}}/>
                <StyledPlusMinus onClick={() => {
                    setTotal(current => {
                        if(count >= 1) {
                            current -= 1;
                        }
                        return current           
                    })
                    setCount((current) => {
                        if(current >= 1){
                            current -= 1
                        }
                        return current                        
                    })
                }}>-</StyledPlusMinus>                
            </StyledCalculatorWrapper>
            <StyledP>{count}</StyledP>
        </StyledWrapper>
    )
};

export default FruitButton;
import { Container, Grid, TextField } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 1800px;
  width: 100%;
  height: 100%;
  margin-top: 100px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  color: #281461;
`;

export const TotalFoodWrapper = styled(Grid)`
  justify-content: center;
  align-items: center;
`;

export const FoodWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -10px;
`;

export const SubmitButton = styled.button`
  border-radius: 15px;
  padding: 5px;
  width: 300px;
  height: 40px;
  color: white;
  border: none;
  background-color: #281461;
  font-weight: bold;
  -webkit-appearance: none;
  cursor: pointer;
  &:hover {
    background-color: #785dc0;
  }
`;

export const BodyInfoWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  width: 80%;
  border-radius: 10px;
`;

export const ExplainLabelWrapper = styled.div`
  text-align: center;
`;

export const ExplainLabel = styled.h6`
  text-align: center;
  color: #281461;
  margin-top: -15px;
`;

export const BodyInfoGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const StyledH1 = styled.h1`
  color: #281461;
  margin-bottom: -10px;
`;

export const BodyInfoInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BodyInfoInput = styled(TextField)`
  margin-left: 30px;
  margin-right: 20px;
  height: 35px;
`;

export const BodyInfoLabel = styled.label`
  display: flex;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 15px;
  width: 20px;
`;

export const WarningText = styled.h6`
  color: #e45454;
  margin-top: 10px;
`;

// 이후에 칼로리 계산기로 재사용
// const CalorieWrapper = styled.div`
//   margin-top: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   width: 50%;
//   height: 100px;
//   background-color: #61ac77;
//   border-radius: 10px;
// `;

// const CalorieResult = styled.h2`
//   margin-right: 30px;
//   font-weight: bold;
// `;

import React from "react";
import {
  ResultContainer,
  CalorieWrapper,
  CalorieText,
} from "./TotalSection.style";

const TotalSection = ({ totalCalrorie, totalExerciseCalrorie }) => {
  return (
    <ResultContainer>
      <CalorieWrapper>
        <CalorieText>섭취 칼로리</CalorieText>
        <CalorieText></CalorieText>
        <CalorieText>{totalCalrorie}kcal</CalorieText>
      </CalorieWrapper>
      <CalorieWrapper>
        <CalorieText>소비 칼로리</CalorieText>
        <CalorieText></CalorieText>
        <CalorieText>-{totalExerciseCalrorie}kcal</CalorieText>
      </CalorieWrapper>
      <hr />
      <CalorieWrapper>
        <CalorieText>총 칼로리</CalorieText>
        <CalorieText></CalorieText>
        <CalorieText>
          {(totalCalrorie - totalExerciseCalrorie).toFixed(0)}kcal
        </CalorieText>
      </CalorieWrapper>
    </ResultContainer>
  );
};

export default TotalSection;

import React from "react";
import {
  ResultContainer,
  CalorieWrapper,
  CalorieText,
} from "./TotalSection.style";

const TotalSection = (props) => {
  return (
    <ResultContainer>
      <CalorieWrapper>
        <CalorieText>섭취 칼로리</CalorieText>
        <CalorieText></CalorieText>
        <CalorieText>2500kcal</CalorieText>
      </CalorieWrapper>
      <CalorieWrapper>
        <CalorieText>소비 칼로리</CalorieText>
        <CalorieText></CalorieText>
        <CalorieText>-900kcal</CalorieText>
      </CalorieWrapper>
      <hr />
      <CalorieWrapper>
        <CalorieText>총 칼로리</CalorieText>
        <CalorieText></CalorieText>
        <CalorieText>1600kcal</CalorieText>
      </CalorieWrapper>
    </ResultContainer>
  );
};

export default TotalSection;

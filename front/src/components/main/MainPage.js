import React, { useEffect, useState } from "react";
import * as Api from "../../api";
import { Container, Grid } from "@mui/material";
import styled from "styled-components";
import BadgeVisibility from "./BadgeVisibility";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 70px;
`;

const FoodWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  border-radius: 15px;
  padding: 5px;
  min-width: 120px;
  color: BLACK;
  font-weight: bold;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:foucus {
    outline: none;
  }
`;

const CalorieWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100px;
  background-color: #61ac77;
  border-radius: 10px;
`;

const CalorieResult = styled.h2`
  margin-right: 30px;
  font-weight: bold;
`;

export default function MainPage() {
  const [foods, setFoods] = useState([]);
  const [foodInfo, setFoodInfo] = useState([]);
  const [calories, setCalories] = useState(0);

  // 클릭 시, 선택된 카테고리와 수를 보내여 계산된 칼로리 값을 받아옴
  const handleClick = async (e) => {
    try {
      const res = await Api.post("foods/calories", { foodInfo });
      setCalories(res.data.calories);
    } catch (err) {
      console.error(err);
    }
  };

  // 음식 데이터를 받아와서 화면에 표시
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await Api.get("foods");
        setFoods(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  // + 버튼이 눌리면 일단 foodInfo에 정보를 넣음
  // submit(계산) 버튼을 누를시 volumne이 0인 값은 배열 filter하여 제거하고 POST 요청

  return (
    <StyledContainer>
      <header>
        <Title>🍴 오늘 무엇을 드셨나요? 🍴</Title>
      </header>
      <Grid container justifyContent="center" alignItems="center">
        {foods.map((food, foodIdx) => (
          <FoodWrapper item key={foodIdx}>
            <BadgeVisibility
              key={foodIdx}
              foodIdx={foodIdx}
              food={food}
              foodInfo={foodInfo}
              setFoodInfo={setFoodInfo}
            />
          </FoodWrapper>
        ))}
      </Grid>
      <SubmitButton onClick={handleClick}>칼로리 계산하기</SubmitButton>
      <CalorieWrapper>
        <CalorieResult>{calories}</CalorieResult>
      </CalorieWrapper>
    </StyledContainer>
  );
}

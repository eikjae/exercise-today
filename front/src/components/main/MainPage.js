import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../../api";
import { Container, Grid, TextField } from "@mui/material";
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
  margin-bottom: 50px;
  color: #281461;
`;

const FoodWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
  margin-top: -10px;
`;

const SubmitButton = styled.button`
  /* margin-top: 10px; */
  border-radius: 15px;
  padding: 5px;
  width: 300px;
  height: 40px;
  color: white;
  border: none;
  background-color: #281461;
  /* background-color: ${(props) =>
    props.isDisabled ? "white" : "#281461"}; */
  font-weight: bold;
  -webkit-appearance: none;
  cursor: pointer;
  /* ${(props) => !props.isDisabled && `cursor: pointer;`}; */
  &:hover {
    background-color: #785dc0;
  }
`;

const BodyInfoWrapper = styled(Grid)`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  /* background-color: lightgray; */
  padding-bottom: 40px;
  width: 80%;
  border-radius: 10px;
`;

const ExplainLabel = styled.h6`
  justify-content: center;
  align-items: center;
  color: "#281461";
  margin-top: -15px;
`;

const BodyInfoGrid = styled(Grid)`
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const BodyInfoInput = styled(TextField)`
  margin-left: 30px;
  margin-right: 20px;
  height: 35px;
`;

const BodyInfoLabel = styled.label`
  display: flex;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 15px;
  width: 20px;
`;

const WarningText = styled.h6`
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

export default function MainPage() {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [foodsInfo, setFoodsInfo] = useState([]);
  // const [calories, setCalories] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const isHeightValid = height.length > 0;
  const isWeightValid = weight.length > 0;
  const isDisabled = !isHeightValid || !isWeightValid;

  // 클릭 시, 선택된 카테고리와 수를 보내여 계산된 칼로리 값을 받아옴
  const handleClick = async (e) => {
    try {
      // filter를 통해 volume이 0인 값 배열에서 제거함
      let copyFoodsInfo = [...foodsInfo];
      copyFoodsInfo = copyFoodsInfo.filter((foodInfo) => foodInfo.volume > 0);

      // POST 요청을 통해 칼로리 계산값을 받아옴
      const res = await Api.post("foods/calories", copyFoodsInfo);
      setFoodsInfo(copyFoodsInfo);
      // setCalories(res.data.calories);
      navigate(`/${res.data.calories}/${height}/${weight}`);
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

  // + 버튼이 눌리면 일단 foodsInfo에 정보를 넣음
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
              food={food}
              foodsInfo={foodsInfo}
              setFoodsInfo={setFoodsInfo}
            />
          </FoodWrapper>
        ))}
      </Grid>
      <BodyInfoWrapper container>
        <div style={{ display: "block", textAlign: "center" }}>
          <ExplainLabel>100g(ml) 단위로 평균 칼로리가 계산됩니다.</ExplainLabel>
          <BodyInfoGrid item xs="auto">
            <h1 style={{ color: "#281461", marginBottom: "-10px" }}>
              키와 몸무게를 입력해주세요
            </h1>
          </BodyInfoGrid>
        </div>
        <BodyInfoGrid item xs="auto">
          <BodyInfoInput
            id="outlined-basic"
            label="신장"
            onChange={(e) => setHeight(e.target.value)}
          />
          <BodyInfoLabel>cm</BodyInfoLabel>
        </BodyInfoGrid>
        <BodyInfoGrid item xs="auto">
          <BodyInfoInput
            id="outlined-basic"
            label="체중"
            onChange={(e) => setWeight(e.target.value)}
          />
          <BodyInfoLabel>kg</BodyInfoLabel>
        </BodyInfoGrid>
      </BodyInfoWrapper>
      <SubmitButton onClick={handleClick} disabled={isDisabled}>
        운동 추천받기
      </SubmitButton>
      {isDisabled ? (
        <WarningText>음식 선택 및 입력을 완료해주세요!</WarningText>
      ) : (
        <WarningText style={{ visibility: "hidden" }}>입력 완료</WarningText>
      )}
      {/* <CalorieWrapper>
        <CalorieResult>{calories} kcal</CalorieResult>
      </CalorieWrapper> */}
    </StyledContainer>
  );
}

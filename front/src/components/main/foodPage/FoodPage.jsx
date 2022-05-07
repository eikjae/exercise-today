/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../../../api";
import { UserStateContext } from "../../../App";
import FoodBadge from "./foodBadgeSection/FoodBadge";
import {
  StyledContainer,
  Title,
  TotalFoodWrapper,
  FoodWrapper,
  SubmitButton,
  BodyInfoWrapper,
  ExplainLabelWrapper,
  ExplainLabel,
  BodyInfoGrid,
  StyledH1,
  BodyInfoInputWrapper,
  BodyInfoInput,
  BodyInfoLabel,
  WarningText,
} from "./FoodPage.style";

export default function FoodPage() {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [foodsInfo, setFoodsInfo] = useState([]);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [likedFoods, setLikedFoods] = useState([]);

  const userState = useContext(UserStateContext);

  const isHeightValid = height.length > 0;
  const isWeightValid = weight.length > 0;
  const isDisabled = !isHeightValid || !isWeightValid;

  const deepClone = (arg) => JSON.parse(JSON.stringify(arg));

  // 클릭 시, 선택된 카테고리와 수를 보내여 계산된 칼로리 값을 받아옴
  const handleClick = async (e) => {
    try {
      // filter를 통해 volume이 0인 값 배열에서 제거함
      let copyFoodsInfo = deepClone(foodsInfo);
      copyFoodsInfo = copyFoodsInfo.filter((foodInfo) => foodInfo.volume > 0);

      // POST 요청을 통해 칼로리 계산값을 받아옴
      const res = await Api.post("foods/calories", copyFoodsInfo);
      setFoodsInfo([...copyFoodsInfo]);

      // 칼로리에 따른 운동 추천 페이지로 이동
      navigate(`/${res.data.calories}/${height}/${weight}`);
    } catch (err) {
      console.error(err);
    }
  };

  // setFoodsInfo를 더 직관적으로 명명
  const updateFoodsInfo = (data) => {
    setFoodsInfo([...data]);
  };

  // 음식 관련 데이터를 받아와서 화면에 표시
  useEffect(async () => {
    try {
      // 전체 음식 리스트를 받아옴
      const res = await Api.get("foods");
      const foods = res.data;
      setFoods([...foods]);

      if (userState.user) {
        // 로그인 했을시, 좋아요된 음식 리스트를 받아옴
        const res = await Api.get("like/food");
        const likedFoods = res.data;
        setLikedFoods([...likedFoods]);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <StyledContainer>
      <header>
        <Title>🍴 오늘 무엇을 드셨나요? 🍴</Title>
      </header>
      <TotalFoodWrapper container>
        {foods.map((food, foodIdx) => (
          <FoodWrapper item key={foodIdx}>
            <FoodBadge
              key={foodIdx}
              food={food}
              foodsInfo={foodsInfo}
              updateFoodsInfo={updateFoodsInfo}
              likedFoods={likedFoods}
            />
          </FoodWrapper>
        ))}
      </TotalFoodWrapper>
      <BodyInfoWrapper>
        <ExplainLabelWrapper>
          <ExplainLabel>100g(ml) 단위로 평균 칼로리가 계산됩니다.</ExplainLabel>
          <BodyInfoGrid item xs="auto">
            <StyledH1>키와 몸무게를 입력해주세요</StyledH1>
          </BodyInfoGrid>
        </ExplainLabelWrapper>
        <BodyInfoInputWrapper>
          <BodyInfoGrid item xs="auto">
            <BodyInfoInput
              label="신장"
              onChange={(e) => setHeight(e.target.value)}
            />
            <BodyInfoLabel>cm</BodyInfoLabel>
          </BodyInfoGrid>
          <BodyInfoGrid item xs="auto">
            <BodyInfoInput
              label="체중"
              onChange={(e) => setWeight(e.target.value)}
            />
            <BodyInfoLabel>kg</BodyInfoLabel>
          </BodyInfoGrid>
        </BodyInfoInputWrapper>
      </BodyInfoWrapper>
      <SubmitButton onClick={handleClick} disabled={isDisabled}>
        운동 추천받기
      </SubmitButton>
      {isDisabled ? (
        <WarningText>음식 선택 및 입력을 완료해주세요!</WarningText>
      ) : (
        <WarningText style={{ visibility: "hidden" }}>입력 완료</WarningText>
      )}
    </StyledContainer>
  );
}

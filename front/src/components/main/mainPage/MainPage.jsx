import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../../../api";
import BadgeVisibility from "./foodBadgeSection/FoodBadge";
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
} from "./MainPage.style";

export default function MainPage() {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [foodsInfo, setFoodsInfo] = useState([]);
  // const [calories, setCalories] = useState(0);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

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
      setFoodsInfo(copyFoodsInfo);
      // setCalories(res.data.calories);
      navigate(`/${res.data.calories}/${height}/${weight}`);
    } catch (err) {
      console.error(err);
    }
  };

  const updateFoodsInfo = (data) => {
    setFoodsInfo(data);
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
      <TotalFoodWrapper container>
        {foods.map((food, foodIdx) => (
          <FoodWrapper item key={foodIdx}>
            <BadgeVisibility
              key={foodIdx}
              food={food}
              foodsInfo={foodsInfo}
              updateFoodsInfo={updateFoodsInfo}
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
      {/* <CalorieWrapper>
        <CalorieResult>{calories} kcal</CalorieResult>
      </CalorieWrapper> */}
    </StyledContainer>
  );
}

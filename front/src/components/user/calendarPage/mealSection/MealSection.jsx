import React, { useCallback, useEffect, useState } from "react";
import {
  MealContainer,
  Image,
  MealInfoContainer,
  StyledTotalCalrorie,
  PWrapper,
  IconWrapper,
  StyeldAddCircleOutlineIcon,
  InputWrapper,
} from "./MealSection.style";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import { get, post } from "../../../../api";

const MealSection = ({ title, getTotalMealCalrorie }) => {
  // 음식 리스트
  const [mealOptions, setMealOptions] = useState([]);
  // 선택한 음식
  const [meal, setMeal] = useState("");
  const [count, setCount] = useState(0);

  const [totalMealCalrorie, setTotalMealCalrorie] = useState(0);

  // api
  const getFoods = useCallback(async () => {
    const res = await get("foods");
    setMealOptions(res.data);
  }, []);

  const getTotalCal = async () => {
    try {
      const res = await post("foods/calories", [
        {
          category: meal,
          volume: count,
        },
      ]);
      setTotalMealCalrorie((current) => {
        return current + res.data.calories;
      });
      getTotalMealCalrorie(res.data);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    try {
      getFoods();
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  return (
    <MealContainer>
      <Image />
      <MealInfoContainer>
        <h5>{title}</h5>
        <InputWrapper>
          <Autocomplete
            disablePortal
            id="food-combo-box"
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField {...params} label="Food" />}
            options={mealOptions}
            size="small"
            onChange={(e, value) => {
              setMeal(value);
            }}
          />
          <TextField
            id="count-meal"
            label="개수"
            variant="outlined"
            size="small"
            type="number"
            InputProps={{
              inputProps: { min: 0 },
            }}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <StyeldAddCircleOutlineIcon onClick={getTotalCal} />
        </InputWrapper>
        <IconWrapper></IconWrapper>
        <PWrapper>
          <StyledTotalCalrorie>총 칼로리</StyledTotalCalrorie>
          <StyledTotalCalrorie>{`${totalMealCalrorie}kcal`}</StyledTotalCalrorie>
        </PWrapper>
      </MealInfoContainer>
    </MealContainer>
  );
};

export default MealSection;

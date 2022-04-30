import React from "react";
import {
  StyledMealContainer,
  StyledImage,
  StyledMealInfoContainer,
  StyledTotalCalrorie,
  StyledPWrapper,
  IconWrapper,
  StyeldAddCircleOutlineIcon,
} from "./MealSection.style";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";

const MealSection = ({ title, mealOptions, setMeal }) => {
  return (
    <StyledMealContainer>
      <StyledImage />
      <StyledMealInfoContainer>
        <h5>{title}</h5>
        <Autocomplete
          disablePortal
          id="food-combo-box"
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} label="Food" />}
          options={[
            {
              label: "사과",
            },
            {
              label: "오렌지",
            },
          ]}
          size="small"
        />
        <IconWrapper>
          <StyeldAddCircleOutlineIcon />
        </IconWrapper>
        <StyledPWrapper>
          <StyledTotalCalrorie>총 칼로리</StyledTotalCalrorie>
          <StyledTotalCalrorie>500kcal</StyledTotalCalrorie>
        </StyledPWrapper>
      </StyledMealInfoContainer>
    </StyledMealContainer>
  );
};

export default MealSection;

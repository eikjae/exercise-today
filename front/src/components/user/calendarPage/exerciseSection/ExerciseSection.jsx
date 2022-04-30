import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import {
  ExerciseLayout,
  AutocompleteWrapper,
  ExerciseCategoriesWrapper,
  ExerciseTotalWrapper,
  ExerciseTotal,
  AddCircleOutlineIcon,
} from "./ExerciseSection.style";

const ExerciseSection = (props) => {
  return (
    <ExerciseLayout>
      <h5>운동</h5>
      <AutocompleteWrapper>
        <ExerciseCategoriesWrapper>
          <Autocomplete
            disablePortal
            id="food-combo-box"
            sx={{ width: "90%" }}
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
        </ExerciseCategoriesWrapper>
        <ExerciseCategoriesWrapper>
          <Autocomplete
            disablePortal
            id="food-combo-box"
            sx={{ width: "90%" }}
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
        </ExerciseCategoriesWrapper>
      </AutocompleteWrapper>
      <ExerciseCategoriesWrapper>
        <AddCircleOutlineIcon />
      </ExerciseCategoriesWrapper>
      <ExerciseCategoriesWrapper>
        <ExerciseTotalWrapper>
          <ExerciseTotal>총 칼로리:</ExerciseTotal>
        </ExerciseTotalWrapper>
        <ExerciseTotalWrapper>
          <ExerciseTotal>1000kcal</ExerciseTotal>
        </ExerciseTotalWrapper>
      </ExerciseCategoriesWrapper>
    </ExerciseLayout>
  );
};

export default ExerciseSection;

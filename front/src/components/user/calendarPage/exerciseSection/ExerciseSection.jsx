import React, { useCallback, useEffect, useState } from "react";
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
import { get, post } from "../../../../api";

const ExerciseSection = ({ weight }) => {
  // 운동 리스트
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [exerciseOptions, setExerciseOptions] = useState([]);

  const [exercise, setExercise] = useState("");

  const getCategory = useCallback(async () => {
    const res = await get("exercise/categorylist");
    setCategoryOptions(res.data);
  }, []);

  const getExercise = useCallback(async (value) => {
    const res = await get(`exercise/category/exerciselist/${value}`);
    setExerciseOptions(res.data);
  }, []);

  const getTotalExerciseCalrorie = async () => {
    const res = await post("exercise/calories", {
      weight,
      name: exercise,
      // time:
    });
  };

  useEffect(() => {
    try {
      getCategory();
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  return (
    <ExerciseLayout>
      <h5>운동</h5>
      <AutocompleteWrapper>
        <ExerciseCategoriesWrapper>
          <Autocomplete
            disablePortal
            id="category-combo-box"
            sx={{ width: "90%" }}
            renderInput={(params) => <TextField {...params} label="카테고리" />}
            options={categoryOptions}
            size="small"
            onChange={(e, value) => {
              getExercise(value);
            }}
          />
        </ExerciseCategoriesWrapper>
        <ExerciseCategoriesWrapper>
          <Autocomplete
            disablePortal
            id="exercise-combo-box"
            sx={{ width: "90%" }}
            renderInput={(params) => <TextField {...params} label="운동" />}
            options={exerciseOptions}
            size="small"
            onChange={(e, value) => {
              setExercise(value);
              console.log(value);
            }}
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

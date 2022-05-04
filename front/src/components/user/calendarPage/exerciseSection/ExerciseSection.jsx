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
  StyledTextField,
  StyledButton,
  HourTextFieldWrapper,
} from "./ExerciseSection.style";
import { get, post } from "../../../../api";

const ExerciseSection = ({
  weight,
  setExerciseList,
  totalExerciseCalrorie,
  handleSetTotalExerciseCalrorie,
}) => {
  // 운동 리스트
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [exerciseOptions, setExerciseOptions] = useState([]);

  const [exerciseCategory, setExerciseCategory] = useState(null);
  const [exercise, setExercise] = useState(null);
  const [hour, setHour] = useState(0);

  const getCategory = useCallback(async () => {
    const res = await get("exercise/categorylist");
    setCategoryOptions(res.data);
  }, []);

  const getExercise = useCallback(async (value) => {
    console.log(value);
    const res = await get(`exercise/exerciselist/${value}`);
    setExerciseOptions(res.data);
  }, []);

  const getTotalExerciseCalrorie = async () => {
    if (hour === 0) return;
    setExerciseCategory(null);
    setExercise(null);
    try {
      const res = await post("exercise/calories", {
        weight,
        name: exercise,
        time: hour,
      });
      setExerciseList((current) => {
        const temp = [...current];
        const find = temp.findIndex((ele) => ele.name === exercise);
        if (find < 0) {
          temp.push({
            category: exerciseCategory,
            name: exercise,
            time: Number(hour),
          });
        } else {
          temp[find].time += Number(hour);
        }
        return temp;
      });

      handleSetTotalExerciseCalrorie(res.data);
    } catch (e) {
      throw new Error(e);
    }
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
            value={exerciseCategory}
            sx={{ width: "90%" }}
            renderInput={(params) => <TextField {...params} label="카테고리" />}
            options={categoryOptions}
            size="small"
            style={{ backgroundColor: "white" }}
            onChange={(e, value) => {
              getExercise(value);
              setExerciseCategory(value);
            }}
          />
        </ExerciseCategoriesWrapper>
        <ExerciseCategoriesWrapper>
          <Autocomplete
            disablePortal
            id="exercise-combo-box"
            value={exercise}
            sx={{ width: "90%" }}
            renderInput={(params) => <TextField {...params} label="운동" />}
            options={exerciseOptions}
            size="small"
            style={{ backgroundColor: "white" }}
            onChange={(e, value) => {
              setExercise(value);
            }}
          />
        </ExerciseCategoriesWrapper>
        <HourTextFieldWrapper>
          <StyledTextField
            id="count-meal"
            value={hour}
            label="시간"
            variant="outlined"
            size="small"
            type="number"
            style={{ backgroundColor: "white" }}
            InputProps={{
              inputProps: { min: 0 },
            }}
            onChange={(e) => {
              setHour(e.target.value);
            }}
          />
          <h4 style={{ marginBottom: "0" }}>시간</h4>
        </HourTextFieldWrapper>
        <StyledButton onClick={getTotalExerciseCalrorie}>추가</StyledButton>
        {/* <AddCircleOutlineIcon onClick={getTotalExerciseCalrorie} /> */}
      </AutocompleteWrapper>
      <ExerciseCategoriesWrapper>
        {/* <ExerciseTotalWrapper>
          <ExerciseTotal>총 칼로리:</ExerciseTotal>
        </ExerciseTotalWrapper> */}
        {/* <ExerciseTotalWrapper>
          <ExerciseTotal>{totalExerciseCalrorie}kcal</ExerciseTotal>
        </ExerciseTotalWrapper> */}
      </ExerciseCategoriesWrapper>
    </ExerciseLayout>
  );
};

export default ExerciseSection;

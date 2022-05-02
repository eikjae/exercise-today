import React, { useCallback, useEffect, useState } from "react";
import {
  MealContainer,
  Image,
  MealInfoContainer,
  IconWrapper,
  StyeldAddCircleOutlineIcon,
  InputWrapper,
  CountWrapper,
  StyledTextField,
  StyledButton,
  MealWrapper,
} from "./MealSection.style";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, TextField } from "@mui/material";
import { get, post } from "../../../../api";
import axios from "axios";

const MealSection = ({ title, strDate, setFoodList, setMealCalrorie }) => {
  // 음식 리스트
  const [mealOptions, setMealOptions] = useState([]);
  // 선택한 음식
  const [meal, setMeal] = useState("");
  const [count, setCount] = useState(0);

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
      // console.log(typeof strDate);
      // const img = await get("dietimage/items/date", {
      //   whenDate: strDate,
      // });
      // console.log(img.data);

      setFoodList((current) => {
        const temp = [...current];
        const find = temp.findIndex((ele) => ele.food === meal);
        if (find < 0) {
          temp.push({
            food: meal,
            count: Number(count),
          });
        } else {
          temp[find].count += Number(count);
        }

        return temp;
      });
      setMealCalrorie((current) => {
        return current + res.data.calories;
      });
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

  const [image, setImage] = useState(null);
  return (
    <MealContainer>
      <h5>{title}</h5>
      <MealWrapper>
        <div
          style={{
            width: "90px",
            height: "90px",
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* action="dietimage" method="post" */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const forData = new FormData();
              forData.append("setImage", setImage);
              try {
                const res = await axios({
                  method: "post",
                  url: "dietimage",
                  data: FormData,
                  headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${sessionStorage.getItem(
                      "userToken"
                    )}`,
                  },
                });
              } catch (e) {
                throw new Error(e);
              }
            }}
          >
            <label>
              <input
                type="file"
                style={{ position: "relative", left: "40px", display: "none" }}
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <div
                style={{
                  display: "inline",
                }}
              >
                이미지 <br />
                업로드
              </div>
            </label>
            <div>
              <input type="submit" />
            </div>
          </form>
        </div>
        {/* <Image /> */}
        <MealInfoContainer>
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
            <CountWrapper>
              <StyledTextField
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
              <h4 style={{ marginBottom: "0" }}>개</h4>
            </CountWrapper>
            <StyledButton onClick={getTotalCal}>추가</StyledButton>
            {/* <StyeldAddCircleOutlineIcon onClick={getTotalCal} /> */}
          </InputWrapper>
          <IconWrapper></IconWrapper>
        </MealInfoContainer>
      </MealWrapper>
    </MealContainer>
  );
};

export default MealSection;

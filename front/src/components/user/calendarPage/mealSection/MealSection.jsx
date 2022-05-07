import React, { useCallback, useEffect, useState } from "react";
import {
  MealContainer,
  MealInfoContainer,
  InputWrapper,
  CountWrapper,
  StyledTextField,
  StyledButton,
  MealWrapper,
  FormWrapper,
  Form,
  ImageWrapper,
  DeleteImgButton,
} from "./MealSection.style";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import * as Api from "../../../../api";
import {
  CalendarMealWarning,
  CalendarSuccess,
} from "../../like/cardSection/calendarButtonSection/CalendarButtonComp";

const MealSection = ({
  title,
  type,
  strDate,
  imgUrl,
  setUrl,
  setFoodList,
  setMealCalrorie,
}) => {
  // 음식 리스트
  const [mealOptions, setMealOptions] = useState([]);
  // 선택한 음식
  const [meal, setMeal] = useState(null);
  const [count, setCount] = useState(0);

  const [imageId, setImageId] = useState(null);

  // api
  const getFoods = useCallback(async () => {
    const res = await Api.get("foods");
    setMealOptions(res.data);
  }, []);

  const getTotalCal = async () => {
    if (count === 0 || !meal) {
      CalendarMealWarning();
      return;
    }
    setMeal(null);
    setCount(0);
    try {
      const res = await Api.post("foods/calories", [
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
        const find = temp.findIndex((ele) => ele.category === meal);
        if (find < 0) {
          temp.push({
            type,
            category: meal,
            volume: Number(count),
          });
        } else {
          temp[find].volume += Number(count);
        }

        return temp;
      });
      setMealCalrorie((current) => {
        return current + res.data.calories;
      });
      CalendarSuccess();
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleSubmitImage = async (e) => {
    try {
      const formData = new FormData();
      formData.append("whenDate", strDate);
      formData.append("type", type);
      formData.append("dietImg", e.target.files[0]);

      const res = await Api.postImage("dietimage", formData);
      setUrl(res.data.imgurl);
      setImageId(res.data.itemId);
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleDeleteImage = async (e) => {
    try {
      await Api.delete(`dietimage/item/${imageId}`);
      setImageId(null);
      setUrl(null);
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

  useEffect(() => {}, []);

  return (
    <MealContainer>
      <h5>{title}</h5>
      <MealWrapper>
        <ImageWrapper>
          <FormWrapper>
            {imgUrl === null ? (
              <Form>
                <label>
                  <input
                    type="file"
                    style={{
                      display: "none",
                    }}
                    accept="image/*"
                    onChange={(e) => {
                      handleSubmitImage(e);
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      cursor: "pointer",
                      width: "80px",
                      height: "80px",
                    }}
                  >
                    <p
                      style={{
                        marginBottom: "0",
                        width: "100%",
                        height: "100%",
                        lineHeight: "40px",
                      }}
                    >
                      이미지 <br /> 업로드
                    </p>
                  </div>
                </label>
              </Form>
            ) : (
              <img
                alt="temp"
                src={imgUrl}
                style={{ width: "100px", height: "100px" }}
                // onClick={(e) => {
                //   if (imgUrl) {
                //     setUrl(null);
                //   }
                // }}
              ></img>
            )}
          </FormWrapper>
          <DeleteImgButton
            onClick={handleDeleteImage}
            // disabled={imageId === null}
          >
            삭제
          </DeleteImgButton>
        </ImageWrapper>
        <MealInfoContainer>
          <InputWrapper>
            <Autocomplete
              disablePortal
              id="food-combo-box"
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="Food" variant="standard" />
              )}
              options={mealOptions}
              size="small"
              value={meal}
              style={{ backgroundColor: "transparent" }}
              onChange={(e, value) => {
                setMeal(value);
              }}
            />
            <CountWrapper>
              <StyledTextField
                id="count-meal"
                label="개수"
                variant="standard"
                size="small"
                type="number"
                value={count}
                style={{ backgroundColor: "transparent" }}
                InputProps={{
                  inputProps: { min: 0 },
                }}
                onChange={(e) => {
                  setCount(e.target.value);
                }}
              />
              <h4 style={{ marginBottom: "0" }}>개</h4>
            </CountWrapper>
            {/* <StyeldAddCircleOutlineIcon onClick={getTotalCal} /> */}
          </InputWrapper>
          <StyledButton onClick={getTotalCal}>등록</StyledButton>
        </MealInfoContainer>
      </MealWrapper>
    </MealContainer>
  );
};

export default MealSection;

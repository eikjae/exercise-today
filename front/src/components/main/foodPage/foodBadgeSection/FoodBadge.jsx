/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
import { UserStateContext } from "../../../../App";
import * as Api from "../../../../api";
import { ButtonGroup, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import {
  StyledWrapper,
  FoodInfoWrapper,
  FoodIconBadge,
  FoodLabelWrapper,
  FoodLabel,
} from "./FoodBadge.style";
import FoodBadgeLike from "./FoodBadgeLike";
import { toast } from "react-toastify";

export default function FoodBadge({
  food,
  foodsInfo,
  updateFoodsInfo,
  likedFoods,
}) {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const userState = useContext(UserStateContext);

  const deepClone = (arg) => JSON.parse(JSON.stringify(arg));

  useEffect(() => {
    try {
      const isExistFood = likedFoods.findIndex(
        (currentFood) => currentFood === food
      );
      if (isExistFood !== -1) {
        // 좋아요 목록에 존재하는 음식일 경우 liked 표시
        setIsLiked(true);
      } else {
        // 아닐 경우 liked 표시 하지 않음
        setIsLiked(false);
      }
    } catch (err) {
      console.error(err);
    }
  }, [likedFoods]);

  const handleFoodsInfo = (params) => {
    // 이미 foodsInfo에 존재한다면 해당 인덱스를 사용하여 volume 업데이트
    const existIdx = foodsInfo.findIndex(
      (current) => current.category === food
    );
    // 존재하지 않을 경우 새로 추가
    if (existIdx === -1) {
      updateFoodsInfo(
        foodsInfo.concat([
          {
            category: food,
            volume: params,
          },
        ])
      );
    } else {
      let copyFoodsInfo = deepClone(foodsInfo);
      copyFoodsInfo[existIdx] = { ...copyFoodsInfo[existIdx], volume: params };
      updateFoodsInfo(copyFoodsInfo);
    }
  };

  const handleClick = async () => {
    try {
      // 비로그인 시, 경고 toast를 띄움
      if (!userState.user) {
        return toast.error("로그인 후 사용 가능한 서비스입니다.");
      }
      await Api.put("like/food", { food });
      setIsLiked((prev) => !prev);

      // 좋아요 완료를 보여주는 toast
      let message = "";
      if (isLiked) {
        message = "❌좋아요가 취소되었습니다!";
      } else {
        message = "⭕좋아요가 완료되었습니다!";
      }
      return toast.success(message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledWrapper>
      <FoodInfoWrapper>
        <FoodIconBadge color="secondary" badgeContent={count}>
          <RestaurantIcon />
        </FoodIconBadge>
        <ButtonGroup color="secondary">
          <Button
            onClick={() => {
              let params;
              setCount((current) => {
                params = Math.max(current - 1, 0);
                return params;
              });
              handleFoodsInfo(params);
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              let params;
              setCount((current) => {
                params = current + 1;
                return params;
              });
              handleFoodsInfo(params);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
        <FoodLabelWrapper>
          <FoodLabel>{food}</FoodLabel>
        </FoodLabelWrapper>
        <FoodBadgeLike isLiked={isLiked} onClick={handleClick} />
      </FoodInfoWrapper>
    </StyledWrapper>
  );
}

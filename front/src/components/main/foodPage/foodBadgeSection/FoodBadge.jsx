import React, { useState, useContext } from "react";
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
import NotLoginedModal from "../../errorSection/NotLoginedModal";

export default function FoodBadge({ food, foodsInfo, updateFoodsInfo }) {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  // 로그인 필요 경고 Modal 관련 상태
  const [showModal, setShowModal] = useState(false);
  // 유저 로그인 확인용 상태
  const userState = useContext(UserStateContext);
  const deepClone = (arg) => JSON.parse(JSON.stringify(arg));

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

  // Modal이 닫힐 경우 MusicImage도 filp을 진행
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClick = async () => {
    try {
      // 비로그인 시, 경고 Modal을 띄움
      if (!userState.user) {
        setShowModal(true);
        return;
      }
      // await Api.put("like/music", { music });
      setIsLiked(!isLiked);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
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
      <NotLoginedModal showModal={showModal} closeModal={handleCloseModal} />
    </>
  );
}

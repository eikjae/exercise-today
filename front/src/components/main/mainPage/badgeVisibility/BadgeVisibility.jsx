import React, { useState } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 270px;
  height: 60px;
  background-color: #e7f0ff;
  border-radius: 10px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 30px;
`;

const FoodLabel = styled.label`
  margin-left: 14.5px;
  font-size: 15px;
  font-weight: bold;
  width: 90px;
  position: absolute;
  margin-top: 5.5px;
  text-align: center;
`;

const FoodBadge = styled(Badge)`
  margin-left: 10px;
`;

export default function BadgeVisibility({ food, foodsInfo, updateFoodsInfo }) {
  const [count, setCount] = useState(0);
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

  return (
    <StyledWrapper>
      <Box
        sx={{
          color: "action.active",
          display: "flex",
          flexDirection: "column",
          "& .MuiBadge-root": {
            marginRight: 2,
          },
        }}
      >
        <div>
          <FoodBadge color="primary" badgeContent={count}>
            <RestaurantIcon />
          </FoodBadge>
          <ButtonGroup>
            <Button
              aria-label="reduce"
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
              aria-label="increase"
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
          <FoodLabel>{food}</FoodLabel>
        </div>
      </Box>
    </StyledWrapper>
  );
}

import React, { useState } from "react";
import * as Api from "../../api";
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
  /* width: 50%; */
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

export default function BadgeVisibility({ food, setFoodInfo }) {
  const [count, setCount] = useState(0);

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
                setCount(Math.max(count - 1, 0));
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              aria-label="increase"
              onClick={() => {
                setCount(count + 1);
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

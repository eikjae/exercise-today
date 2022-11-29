import Badge from "@mui/material/Badge";
import styled from "styled-components";
import { Box } from "@mui/material";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 300px;
  height: 60px;
  background-color: #e4dffc;
  border-radius: 10px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 30px;
`;

export const FoodInfoWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
`;

export const FoodIconBadge = styled(Badge)`
  margin-left: 10px;
  margin-right: 7px;
`;

export const FoodLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const FoodLabel = styled.label`
  font-size: 15px;
  font-weight: bold;
`;

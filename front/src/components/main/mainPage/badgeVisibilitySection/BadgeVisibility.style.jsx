import Badge from "@mui/material/Badge";
import styled from "styled-components";

export const StyledWrapper = styled.div`
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

export const FoodLabel = styled.label`
  margin-left: 14.5px;
  font-size: 15px;
  font-weight: bold;
  width: 90px;
  position: absolute;
  margin-top: 5.5px;
  text-align: center;
`;

export const FoodBadge = styled(Badge)`
  margin-left: 10px;
`;

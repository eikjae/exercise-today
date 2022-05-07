import FormControl from "@mui/material/FormControl";
import { Container, Select } from "@mui/material";
import styled, { css } from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  max-width: 1200px;
  max-height: 1000px;

  ${({ theme }) => {
    return css`
      margin-top: calc(${theme.navbar.height} + 2rem);
    `;
  }}
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const H2 = styled.h2`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.identityColor};
    `;
  }}
  margin-bottom: 15px;
`;

export const H2Margin = styled.h2`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.identityColor};
    `;
  }}
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const SelectBodyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SvgWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid #281461;
  border-radius: 5px;
  margin-top: 20px;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

export const StyledBodyFormControl = styled(FormControl)`
  width: 45%;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  height: 57px;
`;

export const StyledMuscleFormControl = styled(FormControl)`
  width: 100%;
`;

export const ExerciseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SelectExercise = styled(Select)`
  width: 70%;
  height: 57px;
`;

export const LikeButton = styled.button`
  width: 25%;
  height: 57px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #281461;
  font-weight: bold;
  -webkit-appearance: none;
  cursor: pointer;
  &:hover {
    background-color: #785dc0;
  }
`;

export const NotLikeIcon = styled(FavoriteBorderIcon)`
  font-size: 30px;
`;

export const LikeIcon = styled(FavoriteIcon)`
  font-size: 30px;
`;

export const HiddenImg = styled.img`
  width: 100%;
  visibility: hidden;
`;

export const StyledH5 = styled.h5`
  text-align: center;
`;

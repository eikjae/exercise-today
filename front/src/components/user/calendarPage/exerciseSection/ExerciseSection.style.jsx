import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { Button, TextField } from "@mui/material";
import styled, { css } from "styled-components";

export const ExerciseLayout = styled.div`
  width: 100%;
  flex: 0.18;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0.5rem 0 0.5rem 0;
  padding: 0.5rem 0 0.5rem 0;
`;

export const AutocompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 1rem 0 1rem 0;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;

  ${({ theme }) => {
    return css`
      border: 2px solid ${theme.colors.identityColor};
    `;
  }}
`;

export const ExerciseCategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0.7rem;
`;

export const HourTextFieldWrapper = styled(ExerciseCategoriesWrapper)`
  width: 90%;
  justify-content: flex-end;
`;

export const StyledTextField = styled(TextField)`
  width: 80px;
  margin-right: 0.3rem;
`;

export const StyledButton = styled(Button)`
  width: 60%;
  color: white;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.identityColor};
      &:hover {
        background-color: ${theme.colors.hoverIdentityColor};
      }
    `;
  }}
  margin-top: 0.3rem;
  /* box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px; */
`;

export const AddCircleOutlineIcon = styled(AddCircleOutline)`
  &:hover {
    cursor: pointer;
  }
`;

export const ExerciseTotalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
`;

export const ExerciseTotal = styled.span`
  text-align: center;
  padding-right: 1rem;
`;

import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const ExerciseLayout = styled.div`
  width: 100%;
  flex: 0.18;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid pink;

  margin: 0.5rem 0 0.5rem 0;
`;

export const AutocompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ExerciseCategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0.3rem;
`;

export const HourTextFieldWrapper = styled(ExerciseCategoriesWrapper)`
  width: 90%;
  justify-content: flex-end;
`;

export const StyledTextField = styled(TextField)`
  width: 80px;
`;

export const StyledButton = styled(Button)`
  width: 90%;
  color: black;
  background-color: lightgray;
  margin-top: 0.3rem;
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

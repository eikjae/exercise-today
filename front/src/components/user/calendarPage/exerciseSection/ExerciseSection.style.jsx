import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import styled from "styled-components";

export const ExerciseLayout = styled.div`
  width: 100%;
  flex: 0.18;
  flex-direction: column;

  display: flex;

  border: 1px solid pink;

  margin: 0.5rem 0 0.5rem 0;
`;

export const AutocompleteWrapper = styled.div`
  display: flex;
`;

export const ExerciseCategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  border: 1px solid red;
`;

export const AddCircleOutlineIcon = styled(AddCircleOutline)`
  &:hover {
    cursor: pointer;
  }
`;

export const ExerciseTotalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border: 1px solid purple;
`;

export const ExerciseTotal = styled.span`
  text-align: center;
`;

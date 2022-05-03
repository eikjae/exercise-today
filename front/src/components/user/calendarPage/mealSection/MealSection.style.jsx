import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, TextField } from "@mui/material";

export const MealContainer = styled.article`
  width: 100%;
  flex: 0.18;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid pink;

  margin: 0.5rem 0 0.5rem 0;
  padding: 0.5rem;
`;

export const MealWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const FormWrapper = styled.div`
  width: 90px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;
`;

export const SubmitImageButton = styled(Button)`
  width: 70%;
  height: 1.8rem;
  line-height: 10px;
  color: black;
  background-color: lightgray;
  margin-top: 0.3rem;
`;

export const MealInfoContainer = styled.div`
  width: 65%;
  margin: 0 0.5rem 0 0.5rem;
`;

export const InputWrapper = styled.div`
  /* display: flex; */
  align-items: center;
`;

export const Form = styled.form`
  text-align: center;
`;

export const IconWrapper = styled.div`
  text-align: center;
`;

export const StyledTextField = styled(TextField)`
  width: 80px;
  margin-top: 0.3rem;
`;

export const CountWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  color: black;
  background-color: lightgray;
  margin-top: 0.3rem;
`;

export const StyeldAddCircleOutlineIcon = styled(AddCircleOutlineIcon)`
  &:hover {
    cursor: pointer;
  }
`;

export const PWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem 0 0.5rem;
`;
export const StyledTotalCalrorie = styled.p`
  margin-bottom: 0;
`;

import styled, { css } from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, TextField } from "@mui/material";

export const MealContainer = styled.article`
  width: 100%;
  flex: 0.18;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0.5rem 0 0.5rem 0;
  padding: 0.5rem 0 0.5rem 0;
`;

export const MealWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 1rem 0 1rem 0;
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
  border-radius: 10px;
  ${({ theme }) => {
    return css`
      border: 2px solid ${theme.colors.identityColor};
    `;
  }}
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 0.4;

  width: 90%;

  border-right: 1px solid gray;
`;

export const DeleteImgButton = styled(Button)`
  color: white;
  font-weight: 700;
  margin-top: 0.8rem;
  width: 75%;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.identityColor};
      &:hover {
        background-color: ${theme.colors.hoverIdentityColor};
      }
    `;
  }}
`;

export const FormWrapper = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  background-color: white;
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 0.6;
`;

export const InputWrapper = styled.div`
  width: 80%;
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
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
  margin-right: 0.3rem;
`;

export const CountWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  width: 90%;
  color: white;
  font-weight: 700;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.identityColor};
      &:hover {
        background-color: ${theme.colors.hoverIdentityColor};
      }
    `;
  }}/* box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px; */
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

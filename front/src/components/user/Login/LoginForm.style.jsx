import { Box, Button, Container, TextField } from "@mui/material";
import styled from "styled-components";

export const Background = styled.div`
  width: auto;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0) 10%,
      rgba(20, 20, 20, 0.25) 25%,
      rgba(20, 20, 20, 0.5) 50%,
      rgba(20, 20, 20, 0.75) 75%,
      rgba(20, 20, 20, 0.8) 100%
    ),
    url(/imgs/exercise_background.jpg);
  background-size: cover;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInputLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
  width: 50vh;
  height: 70vh;

  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 40px;
`;

export const StyledSocialImg = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;

export const StyledOutLine = styled(Box)`
  width: 300px;
`;

export const StyledInputContainer = styled.div`
  margin-bottom: 1rem;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const StyledWarningMessage = styled.p`
  margin-bottom: 0;
  text-align: en;
  color: red;
  font-size: 10px;
`;

export const StyledButtonWrapper = styled(Box)`
  width: 100%;
  text-align: end;
`;

export const StyledButton = styled(Button)`
  /* border: 1px solid #767676; */
  border-radius: 5px;
  color: #767676;
  margin-left: 1rem;
`;

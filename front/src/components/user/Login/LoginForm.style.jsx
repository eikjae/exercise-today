import { Box, Button, Container, TextField } from "@mui/material";
import styled from "styled-components";

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

  width: 100%;
  height: 80vh;

  border: 1px solid rosybrown;
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

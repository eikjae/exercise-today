import { Box, Button, ButtonGroup, Container, TextField } from "@mui/material";
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

  color: red;
  font-size: 10px;
`;

export const StyledBirthInput = styled(TextField)`
  width: 100%;
  color: #767676;
`;

export const StyledButtonGroup = styled(ButtonGroup)`
  width: 100%;
  margin-bottom: 1rem;
`;

export const StyledSexButton = styled(Button)`
  flex: 0.5;
  border: 1px solid #767676;
  color: #767676;
  &:hover {
    border: 1px solid #767676;
    color: #767676;
  }

  background-color: ${(props) =>
    props.isclicksexbtn === "true" ? "#767676" : "none"};
  color: ${(props) => (props.isclicksexbtn === "true" ? "white" : "#767676")};
`;

export const StyledButtonWrapper = styled(Box)`
  width: 100%;
  text-align: center;
`;

export const StyledHWInfo = styled(StyledInputContainer)`
  display: flex;
  justify-content: space-between;
`;

export const StyledHeightInput = styled(TextField)`
  width: 45%;
`;

export const StyledWeightInput = styled(TextField)`
  width: 45%;
`;

export const StyledRegitserButton = styled(Button)`
  /* border: 1px solid #767676; */
  border-radius: 5px;
  color: #767676;
  margin-left: 1rem;
`;

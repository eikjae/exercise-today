import { Box, Button, ButtonGroup, Container, TextField } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80vh;

  border: 1px solid rosybrown;
`;

export const OutLine = styled(Box)`
  width: 300px;
`;

export const InputContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;
export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const ActivateInputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  /* background-color: red; */
`;

export const EmailField = styled(StyledTextField)`
  width: 73%;
`;

export const SubmitActivateButton = styled(Button)`
  height: 70%;
  color: #767676;
  padding-bottom: 0.2rem;
  margin-left: 0.2rem;
`;

export const WarningMessage = styled.p`
  margin-bottom: 0;

  color: red;
  font-size: 12px;
`;

export const NoticeMessage = styled(WarningMessage)`
  margin-bottom: 0;

  color: green;
  font-size: 12px;
`;

export const BirthInput = styled(TextField)`
  width: 100%;
  color: #767676;
`;

export const StyledButtonGroup = styled(ButtonGroup)`
  width: 100%;
  margin-bottom: 1rem;
`;

export const SexButton = styled(Button)`
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

export const ButtonWrapper = styled(Box)`
  width: 100%;
  text-align: center;
`;

export const HWInfo = styled(InputContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeightInput = styled(TextField)`
  width: 45%;
`;

export const WeightInput = styled(TextField)`
  width: 45%;
`;

export const RegitserButton = styled(Button)`
  /* border: 1px solid #767676; */
  border-radius: 5px;
  color: #767676;
  margin-left: 1rem;
`;

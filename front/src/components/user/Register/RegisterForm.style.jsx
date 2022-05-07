import { Box, Button, ButtonGroup, Container, TextField } from "@mui/material";
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

export const InputLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
  width: 50vh;
  height: 70vh;

  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 40px;
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
  width: 71%;
`;

export const SubmitActivateButton = styled(Button)`
  height: 70%;
  width: 100px;
  color: #ffffff;
  padding-bottom: 0.2rem;
  margin-left: 0.5rem;
  background-color: #281461;
  &:hover {
    background-color: #785dc0;
  }
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
  color: #281461;
`;

export const StyledButtonGroup = styled(ButtonGroup)`
  width: 100%;
  margin-bottom: 1rem;
`;

export const SexButton = styled(Button)`
  flex: 0.5;
  border: 1px solid #281461;
  color: #281461;
  &:hover {
    border: 1px solid #281461;
    color: #281461;
  }

  background-color: ${(props) =>
    props.isclicksexbtn === "true" ? "#281461" : "none"};
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
  color: white;
  font-weight: bold;
  margin-left: 1rem;
  background-color: #281461;
  width: 8rem;
  &:hover {
    background-color: #785dc0;
  }
`;

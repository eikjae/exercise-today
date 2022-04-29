import { Button, FormControl, RadioGroup } from "@mui/material";
import styled from "styled-components";

export const StyledTopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 85%;

  margin: 2rem auto 2rem auto;
  padding: 1.5rem;

  border-radius: 1rem;

  border: 2px solid #cd95f2;
`;

export const StyledSliderContainer = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  width: 100%;
  margin: 0.5rem 0 0.5rem 0;
`;

export const StyledSliderTitle = styled.h4`
  margin: 0;
  flex: 0.2;
`;

export const StyledOrderListContainer = styled(RadioGroup)`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const StyledButton = styled(Button)`
  width: 20rem;
  height: 3rem;

  color: #52af77;

  border: 2px solid #52af77;
  border-radius: 10px;

  margin-top: 1rem;
  margin-bottom: 1rem;

  font-size: 1.3rem;
  font-weight: 600;

  transition: background-color 0.3s ease-in;
  &:hover {
    background-color: #52af77;
    color: white;
  }
`;

export const StyledFormControl = styled(FormControl)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

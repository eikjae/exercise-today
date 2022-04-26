import { Button, Container } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  max-width: 1200px;
  min-height: 90vh;
  border: 2px solid black;
  text-align: center;
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

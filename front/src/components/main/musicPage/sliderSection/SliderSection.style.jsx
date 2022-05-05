import {
  Autocomplete,
  Button,
  FormControl,
  Input,
  RadioGroup,
} from "@mui/material";
import styled, { css } from "styled-components";

export const StyledTopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 85%;

  margin: 2rem auto 2rem auto;
  padding: 1.5rem;

  border-radius: 1rem;

  ${({ theme }) => {
    return css`
      border: 2px solid ${theme.colors.identityColor};
    `;
  }}
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

  ${({ theme }) => {
    return css`
      border: 2px solid ${theme.colors.identityColor};
      color: ${theme.colors.identityColor};
    `;
  }}
  border-radius: 10px;

  margin-top: 1rem;
  margin-bottom: 1rem;

  font-size: 1.3rem;
  font-weight: 600;

  transition: background-color 0.3s ease-in;

  ${({ theme }) => {
    return css`
      &:hover {
        background-color: ${theme.colors.identityColor};
        color: white;
      }
    `;
  }}
`;

export const StyledFormControl = styled(FormControl)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const AutoCompleteWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const StyledAutocomplete = styled(Autocomplete)`
  margin: 8px;
  ${({ theme }) => {
    return css`
      &:before {
        border-color: ${theme.colors.identityColor};
      }
    `;
  }}
`;

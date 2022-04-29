import styled from "styled-components";
import { FormControlLabel } from "@mui/material";

export const StyledSubTitle = styled.h2`
  font-size: 2rem;
  ${({ theme }) => theme.tablet`
      font-size: 1.7rem;
  `}
  ${({ theme }) => theme.miniTablet`
      font-size: 1.4rem;
  `}
`;

export const StyledSwitchLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.6;
  margin-top: 2rem;
`;

export const StyledSwitchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  background-color: #f8eaf1;

  height: 100%;

  padding: 1.5rem;
  margin: 1rem;

  border-radius: 10px;
  ${({ theme }) => theme.tablet`
        padding: 1.5rem 0 1.5rem 0;
    `}
`;

export const StyledFormControlLabelContainer = styled.div`
  display: flex;
  width: 25%;
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  padding-left: 0.5rem;
  margin: 0;
  ${({ theme }) => theme.tablet`
        padding-left: 0.8rem;        
    `}
  ${({ theme }) => theme.miniTablet`
        margin: auto;
        flex-direction: column;
    `}
`;

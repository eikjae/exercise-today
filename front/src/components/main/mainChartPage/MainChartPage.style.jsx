import { Container } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  height: 90vh;
  margin: auto;
  padding: 2rem;
  border: 2px solid black;
`;

export const StyledSubTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  ${({ theme }) => theme.tablet`
        font-size: 1.7rem;
    `}
  ${({ theme }) => theme.miniTablet`
        font-size: 1.4rem;
    `}
`;

export const StyledTopSection = styled.section`
  display: flex;
  flex: 0.4;
  ${({ theme }) => theme.tablet`
        display: flex;
        flex-direction: column;
    `}

  text-align: center;
`;

export const StyledBottomSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0.6;
`;

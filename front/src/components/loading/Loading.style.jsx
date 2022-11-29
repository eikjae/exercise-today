import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import styled, { css } from "styled-components";

export const LoadingContainer = styled.div`
  backdrop-filter: blur(3px);
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  left: 0;
  top: 0;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoadingIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledDirectionsRunIcon = styled(DirectionsRunIcon)`
  z-index: 120;
  opacity: 1;
  font-size: 5rem;
  ${({ theme }) => {
    return css`
      color: ${theme.colors.identityColor};
    `;
  }}
`;

export const P = styled.p`
  position: relative;
  font-size: 2rem;
  font-weight: 700;

  ${({ theme }) => {
    return css`
      color: ${theme.colors.identityColor};
    `;
  }}
`;

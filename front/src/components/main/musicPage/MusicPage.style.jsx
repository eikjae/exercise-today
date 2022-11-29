import { Container } from "@mui/material";
import styled, { css } from "styled-components";

export const StyledContainer = styled(Container)`
  max-width: 1200px;
  ${({ theme }) => {
    return css`
      margin-top: calc(${theme.navbar.height} + 2rem);
    `;
  }}
  text-align: center;
`;

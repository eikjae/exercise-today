import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => {
    return css`
      height: ${theme.navbar.height};
    `;
  }}
  padding: 0.3rem;
  background: #4d2eb2;
  margin-bottom: 10px;
`;

export const StyledTitle = styled.h4`
  margin-bottom: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: bold;
  font-size: 25px;
  color: white;
  &:hover {
    cursor: pointer;
    color: #ce7aff;
    transition: color 0.3s;
  }
`;

export const TitleIcon = styled(DirectionsRunIcon)`
  font-size: 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  color: white;
  font-weight: bold;
  &:hover {
    color: #ce7aff;
    transition: color 0.3s;
  }
`;

export const StyledNavContainer = styled(Box)`
  font-size: 17px;
  display: flex;
  align-items: center;
`;

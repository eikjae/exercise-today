import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0.3rem;
`;

export const StyledTitle = styled.h4`
  margin-bottom: 0;
  padding-left: 1rem;
  padding-right: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
`;

export const StyledNavContainer = styled(Box)``;

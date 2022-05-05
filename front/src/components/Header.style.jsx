import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0.3rem;
  background: linear-gradient(90deg, #c0a5ff 80%, #e981cf);
`;

export const StyledTitle = styled.h4`
  margin-bottom: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: bold;
  font-size: 25px;
  color: #281461;
  &:hover {
    cursor: pointer;
  }
`;

export const TitleIcon = styled(DirectionsRunIcon)`
  font-size: 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  color: #281461;
  font-weight: bold;
  &:hover {
    color: #585ac7;
  }
`;

export const StyledNavContainer = styled(Box)`
  font-size: 17px;
`;

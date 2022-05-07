import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, MenuItem } from "@mui/material";

export const MenuButton = styled(Button)`
  color: #281461;
  font-size: 17px;
  font-weight: bold;
  font-family: "Elice Digital Baeum" !important;
  padding: 8px;
  margin: 2px;
`;

export const MenuPage = styled(MenuItem)`
  background-color: transparent;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem;
  color: #281461;
  font-weight: bold;
  &:hover {
    color: #585ac7;
  }
`;

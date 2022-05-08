import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, MenuItem } from "@mui/material";

export const MenuButton = styled(Button)`
  color: white;
  font-size: 17px;
  font-weight: bold;
  font-family: "Elice Digital Baeum" !important;
  padding: 8px;
  margin: 2px;
  &:hover {
    color: #ce7aff;
    transition: color 0.3s;
  }
`;

export const MenuPage = styled(MenuItem)`
  background-color: transparent;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem;
  color: #4d2eb2;
  font-weight: bold;
  &:hover {
    color: #ce7aff;
    transition: color 0.3s;
  }
`;

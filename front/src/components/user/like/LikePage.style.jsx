import styled from "styled-components";
import { styled as styledMui } from "@mui/material/styles";
import { Container, Tabs, Tab } from "@mui/material";

export const Layout = styled(Container)`
  margin-top: 10px;
  /* display: flex; */
  /* flex-direction: row; */
  max-width: 100%;
  /* text-align: center; */
`;

export const UserName = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const LikeTabs = styledMui((props) => (
  <Tabs
    textColor="inherit"
    indicatorColor="secondary"
    variant="fullWidth"
    {...props}
  />
))`
  background-color: #281461;
`;

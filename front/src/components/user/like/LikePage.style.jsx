import styled from "styled-components";
import { styled as styledMui } from "@mui/material/styles";
import { Container, Tabs, Grid } from "@mui/material";

export const Layout = styled(Container)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  text-align: center;
`;

export const LeftRowGrid = styled(Grid)`
  /* margin-left: 120px; */
  margin-top: 37px;
  width: 20%;
`;

export const ColGrid = styled(Grid)`
  flex-direction: column;
  margin-bottom: 50px;
`;

export const RightRowGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  margin-left: 10px;
  /* margin-right: 100px; */
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

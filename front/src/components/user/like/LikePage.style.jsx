import styled from "styled-components";
import { styled as styledMui } from "@mui/material/styles";
import { Tabs } from "@mui/material";

export const Layout = styled.div`
  margin-top: 100px;
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  /* max-width: 100%; */
  text-align: center;
`;

export const LeftRowGrid = styled.div`
  /* margin-left: 120px; */
  margin-top: 37px;
  width: 20rem;
`;

export const ColGrid = styled.div`
  flex-direction: column;
  margin-bottom: 50px;
`;

export const RightRowGrid = styled.div`
  width: 85rem;
  height: 100%;
  margin-left: 10px;
  margin-right: 100px;
`;

export const UserName = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  color: #281461;
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

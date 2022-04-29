import { Container, Grid } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  margin: 10px;
  display: flex;
`;

export const RowGrid = styled(Grid)`
  flex-direction: row;
`;

export const ColGrid = styled(Grid)`
  flex-direction: column;
`;

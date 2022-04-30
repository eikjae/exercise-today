import { Container, Grid } from "@mui/material";
import styled from "styled-components";
import DateRangeIcon from "@mui/icons-material/DateRange";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BarChartIcon from "@mui/icons-material/BarChart";

export const Layout = styled(Container)`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  text-align: center;
`;

export const LeftRowGrid = styled(Grid)`
  /* margin-left: 120px; */
  /* width: 100%; */
`;

export const ColGrid = styled(Grid)`
  flex-direction: column;
  margin-bottom: 50px;
`;

export const RightRowGrid = styled(Grid)`
  width: 60%;
  height: 100%;
  margin-left: 200px;
  margin-right: 100px;
`;

export const RightColGrid = styled(Grid)`
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  /* width: 100%; */
  padding: 10px;
  height: 150px;
  border: 2px solid #281461;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c4b6ec;
    border: 2px solid #605288;
  }
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ImgWrapper = styled.img`
  width: 100px;
  margin: 10px;
`;

export const ContentTitle = styled.h4`
  color: #281461;
  margin-top: 10px;
`;

export const ContentDetail = styled.h6`
  color: #281461;
`;

export const DateIcon = styled(DateRangeIcon)`
  font-size: 50px;
`;

export const BookmarkIcon = styled(BookmarkBorderIcon)`
  font-size: 50px;
`;

export const StatisticsIcon = styled(BarChartIcon)`
  font-size: 50px;
  color: "#281461";
`;

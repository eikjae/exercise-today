import styled from "styled-components";
import { Container } from "@mui/material";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

export const Layout = styled(Container)`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  text-align: center;
  align-items: center;
  color: "#281461";
`;

export const ErrorBar = styled.div`
  background: repeating-linear-gradient(
    45deg,
    #ffe867,
    #ffe867,
    30px,
    #3d3535 0,
    #3d3535 60px
  );
  width: 100%;
  height: 50px;
  margin: 20px;
`;

export const ErrorIcon = styled(ReportGmailerrorredIcon)`
  color: #281461;
  margin-top: 10px;
  font-size: 100px;
`;

export const ErrorTitle = styled.h1`
  color: #281461;
  margin-top: 50px;
  font-weight: bold;
  font-size: 50px;
`;

export const ErrorDetail = styled.h4`
  color: #281461;
  margin-top: 20px;
  font-size: 25px;
`;

export const ErrorButton = styled.button`
  border-radius: 15px;
  padding: 5px;
  margin: 20px;
  width: 300px;
  height: 40px;
  color: white;
  border: none;
  background-color: #281461;
  font-weight: bold;
  -webkit-appearance: none;
  cursor: pointer;
  &:hover {
    background-color: #785dc0;
  }
`;

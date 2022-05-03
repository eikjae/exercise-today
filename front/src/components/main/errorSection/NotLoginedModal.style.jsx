import styled from "styled-components";
import { Box } from "@mui/material";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

export const ModalBox = styled(Box)`
  position: absolute;
  padding: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 0px 10px 5px #616063;
  display: flex;
  flex-direction: column;
`;

export const ErrorContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ErrorIcon = styled(ReportGmailerrorredIcon)`
  color: #281461;
  font-size: 30px;
  margin-right: 5px;
`;

export const ErrorTitle = styled.h2`
  color: #281461;
  font-weight: bold;
  font-size: 30px;
`;

export const ErrorDetail = styled.h6`
  color: #281461;
  margin-top: 10px;
`;

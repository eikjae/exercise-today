import { Chip } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyleWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const BaseChip = ({ title, content }) => {
  return (
    <StyleWrapper>
      <h3>{title}</h3>
      <Chip label={content} variant="outlined" size="medium" />
    </StyleWrapper>
  );
};

export default BaseChip;

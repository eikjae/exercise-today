import { Chip } from "@mui/material";
import React from "react";

const BaseChip = ({ title, content }) => {
  return <Chip label={content} variant="outlined" size="medium" />;
};

export default BaseChip;

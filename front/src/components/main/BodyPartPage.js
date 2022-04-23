import React from "react";

import { Container } from "@mui/material";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
`;

export default function BodyPartPage() {
  return (
    <StyledContainer>
      <img
        src="/exercise_img.png"
        alt="임시 이미지"
        style={{ width: "100%" }}
      />
    </StyledContainer>
  );
}

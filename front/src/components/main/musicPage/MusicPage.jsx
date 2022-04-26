import React from "react";
import { StyledButton, StyledContainer } from "./MusicPage.style";
import SliderSection from "./sliderSection/SliderSection";

const MusicPage = (props) => {
  return (
    <StyledContainer>
      <SliderSection />
      <StyledButton>검색</StyledButton>
    </StyledContainer>
  );
};

export default MusicPage;

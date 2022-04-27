import React from "react";
import { StyledButton, StyledContainer } from "./MusicPage.style";
import MusicSection from "./musicSection/MusicSection";
import SliderSection from "./sliderSection/SliderSection";

const MusicPage = (props) => {
  return (
    <StyledContainer>
      <SliderSection />
      <StyledButton>검색</StyledButton>
      <MusicSection />
    </StyledContainer>
  );
};

export default MusicPage;

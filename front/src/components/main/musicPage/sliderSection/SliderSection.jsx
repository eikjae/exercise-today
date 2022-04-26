import React, { useState } from "react";
import MusicSlider from "../../../slider/MusicSlider";
import {
  StyledSliderContainer,
  StyledSliderTitle,
  StyledTopSection,
} from "./SliderSection.style";

const SliderSection = (props) => {
  const [energy, setEnergy] = useState(0);
  const [bpm, setBpm] = useState(0);
  const [danceability, setDanceability] = useState(0);
  const [year, setYear] = useState(0);
  return (
    <StyledTopSection>
      <StyledSliderContainer>
        <StyledSliderTitle>Energy</StyledSliderTitle>
        <MusicSlider />
      </StyledSliderContainer>
      <StyledSliderContainer>
        <StyledSliderTitle>BPM</StyledSliderTitle>
        <MusicSlider />
      </StyledSliderContainer>
      <StyledSliderContainer>
        <StyledSliderTitle>Danceability</StyledSliderTitle>
        <MusicSlider />
      </StyledSliderContainer>
      <StyledSliderContainer>
        <StyledSliderTitle>Year</StyledSliderTitle>
        <MusicSlider />
      </StyledSliderContainer>
    </StyledTopSection>
  );
};

export default SliderSection;

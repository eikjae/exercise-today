import React, { useEffect, useState } from "react";
import MusicSlider from "../../../slider/MusicSlider";
import {
  StyledSliderContainer,
  StyledSliderTitle,
  StyledTopSection,
} from "./SliderSection.style";

const SliderSection = (props) => {
  const [energy, setEnergy] = useState([0, 0]);
  const [bpm, setBpm] = useState([0, 0]);
  const [danceability, setDanceability] = useState([0, 0]);
  const [year, setYear] = useState([0, 0]);

  const handleOnChange = (value) => {
    setEnergy(value);
  };
  useEffect(() => {
    console.log(energy);
  }, [energy]);
  return (
    <StyledTopSection>
      <StyledSliderContainer>
        <StyledSliderTitle>Energy</StyledSliderTitle>
        <MusicSlider
          min={0.7}
          max={1.0}
          step={0.1}
          handleOnChange={handleOnChange}
          energy={energy}
        />
      </StyledSliderContainer>
      <StyledSliderContainer>
        <StyledSliderTitle>BPM</StyledSliderTitle>
        <MusicSlider min={110} max={126} step={1} />
      </StyledSliderContainer>
      <StyledSliderContainer>
        <StyledSliderTitle>Danceability</StyledSliderTitle>
        <MusicSlider min={0.62} max={1.0} step={0.01} />
      </StyledSliderContainer>
      <StyledSliderContainer>
        <StyledSliderTitle>Year</StyledSliderTitle>
        <MusicSlider min={2014} max={2020} step={1} />
      </StyledSliderContainer>
    </StyledTopSection>
  );
};

export default SliderSection;

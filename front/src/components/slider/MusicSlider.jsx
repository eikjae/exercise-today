import React from "react";
import {
  StyledMusicSlider,
  StyledSliderContainer,
  StyledSliderLeft,
  StyledSliderRight,
} from "./StyledSlider";

const MusicSlider = ({ min, max, step, handleOnChange, energy }) => {
  const handleChange = (event, newValue) => {
    handleOnChange(newValue);
  };

  return (
    <StyledSliderContainer>
      <StyledSliderLeft>low</StyledSliderLeft>
      <StyledSliderRight>high</StyledSliderRight>
      <StyledMusicSlider
        valueLabelDisplay="auto"
        marks
        value={energy}
        step={step}
        min={min}
        max={max}
        onChange={handleChange}
      />
    </StyledSliderContainer>
  );
};

export default MusicSlider;

import React from "react";
import {
  StyledMusicSlider,
  StyledSliderContainer,
  StyledSliderLeft,
  StyledSliderRight,
} from "./StyledSlider";

const MusicSlider = ({
  min,
  max,
  step,
  handleOnChange,
  value,
  leftLabel,
  rightLabel,
}) => {
  const handleChange = (event, newValue) => {
    handleOnChange(newValue);
  };

  return (
    <StyledSliderContainer>
      <StyledSliderLeft>{leftLabel}</StyledSliderLeft>
      <StyledSliderRight>{rightLabel}</StyledSliderRight>
      <StyledMusicSlider
        valueLabelDisplay="auto"
        marks
        value={value}
        step={step}
        min={min}
        max={max}
        onChange={handleChange}
      />
    </StyledSliderContainer>
  );
};

export default MusicSlider;

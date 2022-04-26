import React from "react";
import {
  StyledMusicSlider,
  StyledSliderContainer,
  StyledSliderLeft,
  StyledSliderRight,
} from "./StyledSlider";

const MusicSlider = (props) => {
  return (
    <StyledSliderContainer>
      <StyledSliderLeft>low</StyledSliderLeft>
      <StyledSliderRight>high</StyledSliderRight>
      <StyledMusicSlider
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </StyledSliderContainer>
  );
};

export default MusicSlider;

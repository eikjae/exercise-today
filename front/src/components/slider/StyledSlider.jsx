import { Slider } from "@mui/material";
import styled from "styled-components";

export const StyledSliderContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0.7;

  position: relative;

  background-color: whitesmoke;
  border-radius: 0.5rem;
`;

export const StyledSliderLeft = styled.span`
  position: absolute;
  left: 0;
  top: -1rem;
`;

export const StyledSliderRight = styled.span`
  position: absolute;
  right: 0;
  top: -1rem;
`;

export const StyledMusicSlider = styled(Slider)({
  color: "#281461",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#281461",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

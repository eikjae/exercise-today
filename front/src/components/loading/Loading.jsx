import React from "react";
import {
  LoadingContainer,
  P,
  StyledDirectionsRunIcon,
  StyledLoadingIconWrapper,
} from "./Loading.style";

const Loading = (props) => {
  return (
    <LoadingContainer>
      <StyledLoadingIconWrapper>
        <StyledDirectionsRunIcon />
        <P>Loading...</P>
      </StyledLoadingIconWrapper>
    </LoadingContainer>
  );
};

export default Loading;

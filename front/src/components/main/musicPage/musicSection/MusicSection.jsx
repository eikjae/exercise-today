import React from "react";
import Music from "./Music";
import { StyledBottomSection, Wrapper } from "./MusicSection.style";
import { StyledBottomLayout } from "./MusicSection.style";

const MusicSection = (props) => {
  return (
    <StyledBottomSection>
      <StyledBottomLayout>
        <Wrapper>
          <Music></Music>
          <Music></Music>
          <Music></Music>
          <Music></Music>
          <Music></Music>
          <Music></Music>
          <Music></Music>
          <Music></Music>
          <Music></Music>
        </Wrapper>
      </StyledBottomLayout>
    </StyledBottomSection>
  );
};

export default MusicSection;

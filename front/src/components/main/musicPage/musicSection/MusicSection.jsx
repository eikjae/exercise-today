import React from "react";
import Music from "./Music";
import { StyledBottomSection } from "./MusicSection.style";
import { StyledBottomLayout } from "./MusicSection.style";
const MusicSection = ({ musics }) => {
  return (
    <StyledBottomSection>
      <StyledBottomLayout>
        {musics.length > 0 &&
          musics.map((m, index) => <Music key={index} music={m} />)}
      </StyledBottomLayout>
    </StyledBottomSection>
  );
};

export default MusicSection;

import React, { useState } from "react";
import { StyledContainer } from "./MusicPage.style";
import MusicSection from "./musicSection/MusicSection";
import SliderSection from "./sliderSection/SliderSection";
// recoil 사용을 위한 import
import { RecoilRoot } from "recoil";

const MusicPage = (props) => {
  const [musics, setMusics] = useState([]);

  const handleSetMusics = (data) => {
    setMusics(data);
  };
  return (
    <RecoilRoot>
      <StyledContainer>
        <SliderSection handleSetMusics={handleSetMusics} />
        <MusicSection musics={musics} />
      </StyledContainer>
    </RecoilRoot>
  );
};

export default MusicPage;

import React, { useState } from "react";
import Loading from "../../loading/Loading";
import { StyledContainer } from "./MusicPage.style";
import MusicSection from "./musicSection/MusicSection";
import SliderSection from "./sliderSection/SliderSection";

const MusicPage = (props) => {
  const [musics, setMusics] = useState([]);

  const handleSetMusics = (data) => {
    setMusics(data);
  };
  return (
    <StyledContainer>
      {musics.length === 0 ? <Loading /> : <></>}
      <SliderSection handleSetMusics={handleSetMusics} />
      <MusicSection musics={musics} />
    </StyledContainer>
  );
};

export default MusicPage;

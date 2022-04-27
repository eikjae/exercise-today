import React from "react";
import {
  StyledMusicContainer,
  StyledMusicTitle,
  StyledMusicTitleWrapper,
} from "./Music.style";
import MusicImage from "./imgs/MusicImage";

const Music = ({ music }) => {
  return (
    <>
      <StyledMusicContainer>
        <StyledMusicTitleWrapper>
          <StyledMusicTitle>{music.title}</StyledMusicTitle>
        </StyledMusicTitleWrapper>
        <MusicImage music={music}></MusicImage>
      </StyledMusicContainer>
    </>
  );
};

export default Music;

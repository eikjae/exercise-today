/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./style.css";
import BackImageLike from "./BackImageLike";
import * as Api from "../../../../../api";

const StyledBack = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 250px;
  background: #f8f6ea;
  box-shadow: 10px 10px 5px #5f4d63;
  position: absolute;
  border-radius: 10px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform ease 500ms;

  background: #f8f6ea;
  transform: rotateY(-180deg);
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
`;
const BackImage = ({ music }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likedMusics, setLikedMusics] = useState([]);
  useEffect(async () => {
    const { musics } = await Api.get("like/music");
    setLikedMusics([...musics]);

    const isExistMusic = musics.findIndex(
      (currentMusic) => currentMusic === music.title
    );

    if (isExistMusic !== -1) {
      // 존재하는 곡일 때
      setIsLiked(true);
    }
  }, []);

  const handleClick = async () => {
    // if(isLiked){
    //   // 이미 좋아요한 곡일 경우 좋아요에서 제외해야 함
    //   await Api.put("like/music", {music});
    // } else {
    //   await Api.put("like/music", {music});
    // }

    await Api.put("like/music", { music });
    setIsLiked(!isLiked);
  };

  return (
    <StyledBack className="back">
      <h5>Title</h5>
      <p>{music?.title}</p>
      <h5>Artists</h5>
      <p>{music?.artists}</p>
      <h5>{music?.year}</h5>
      <BackImageLike isLiked={isLiked} onClick={handleClick} />
    </StyledBack>
  );
};

export default BackImage;

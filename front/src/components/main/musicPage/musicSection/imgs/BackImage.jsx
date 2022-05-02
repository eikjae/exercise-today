/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import "./style.css";
import BackImageLike from "./BackImageLike";
import * as Api from "../../../../../api";
import { UserStateContext } from "../../../../../App";
import NotLoginedModal from "../../../errorSection/NotLoginedModal";

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
const BackImage = ({ music, closeModalFlip }) => {
  const [isLiked, setIsLiked] = useState(false);
  // const [likedMusics, setLikedMusics] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const userState = useContext(UserStateContext);

  // Modal이 닫힐 경우 MusicImage도 filp을 진행
  const handleCloseModal = () => {
    setShowModal(false);
    closeModalFlip();
  };

  useEffect(async () => {
    try {
      const res = await Api.get("like/music");
      const likedMusics = res.data;
      // setLikedMusics([...likedMusics]);

      const isExistMusic = likedMusics.findIndex(
        (currentMusic) => currentMusic === music.title
      );

      if (isExistMusic !== -1) {
        // 존재하는 곡일 때
        setIsLiked(true);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleClick = async () => {
    // if(isLiked){
    //   // 이미 좋아요한 곡일 경우 좋아요에서 제외해야 함
    //   await Api.put("like/music", {music});
    // } else {
    //   await Api.put("like/music", {music});
    // }
    try {
      if (!userState.user) {
        setShowModal(true);
        return;
      }
      await Api.put("like/music", { music });
      setIsLiked(!isLiked);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <StyledBack className="back">
        <h5>Title</h5>
        <p>{music?.title}</p>
        <h5>Artists</h5>
        <p>{music?.artists}</p>
        <h5>{music?.year}</h5>
        <BackImageLike isLiked={isLiked} onClick={handleClick} />
      </StyledBack>
      <NotLoginedModal showModal={showModal} closeModal={handleCloseModal} />
    </>
  );
};

export default BackImage;

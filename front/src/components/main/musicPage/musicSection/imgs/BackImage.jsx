/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import "./style.css";
import BackImageLike from "./BackImageLike";
import * as Api from "../../../../../api";
import { UserStateContext } from "../../../../../App";
import NotLoginedModal from "../../../errorSection/NotLoginedModal";
import { useRecoilState, useRecoilValue } from "recoil";
import { likedMusicsState, searchClickedState } from "../../MusicAtom";

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
  // 좋아요 여부 확인
  const [isLiked, setIsLiked] = useState(false);
  // 좋아요된 음악 목록
  const [likedMusics, setLikedMusics] = useRecoilState(likedMusicsState);
  // 로그인 필요 경고 Modal 관련 상태
  const [showModal, setShowModal] = useState(false);
  // 유저 로그인 확인용 상태
  const userState = useContext(UserStateContext);
  // 검색 버튼 클릭시 like 업데이트
  const searchClicked = useRecoilValue(searchClickedState);

  // Modal이 닫힐 경우 MusicImage도 filp을 진행
  const handleCloseModal = () => {
    setShowModal(false);
    closeModalFlip();
  };

  // 검색 버튼이 클릭 될 때마다 각 music의 like 상태를 확인함
  useEffect(async () => {
    try {
      const isExistMusic = likedMusics.findIndex(
        (currentMusicTitle) => currentMusicTitle === music.title
      );
      console.log(isExistMusic);
      console.log(music.title);
      if (isExistMusic !== -1) {
        // 좋아요 목록에 존재하는 곡일 경우 liked 표시
        setIsLiked(true);
      } else {
        // 아닐 경우 liked 표시 하지 않음
        setIsLiked(false);
      }
    } catch (err) {
      console.error(err);
    }
  }, [searchClicked]);

  const handleClick = async () => {
    try {
      // 로그인한 사용자가 아닐시 좋아요 기능을 사용할 수 없음
      if (!userState.user) {
        setShowModal(true);
        return;
      }
      // 로그인 했을 경우 좋아요 항목에 추가/삭제 요청
      await Api.put("like/music", { music: music.title });
      setIsLiked((prev) => !prev);

      // LikedMusics 업데이트
      const res = await Api.get("like/music");
      const newLikedMusics = res.data;
      setLikedMusics([...newLikedMusics]);
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

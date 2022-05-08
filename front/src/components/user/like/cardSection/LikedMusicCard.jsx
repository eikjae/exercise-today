import React, { useState } from "react";
import { Layout, LikeImg, SmallTitle, CardSubTitle } from "./LikedCard.style";
import { LikeButtonComp } from "./likeButtonSection/LikeButtonComp";
import * as Api from "../../../../api";

export default function LikedMusicCard({ music, isEditable }) {
  const [isLiked, setIsLiked] = useState(true);
  const handleClick = async () => {
    try {
      // 로그인 했을 경우 좋아요 항목에 추가/삭제 요청
      await Api.put("like/music", { music: music.musicId });
      setIsLiked((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Layout>
      <LikeImg src={music?.image_link} />
      <SmallTitle>{music.title}</SmallTitle>
      <CardSubTitle>{music.artists}</CardSubTitle>
      {isEditable && <LikeButtonComp isLiked={isLiked} onClick={handleClick} />}
    </Layout>
  );
}

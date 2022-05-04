import React, { useState } from "react";
import { Layout, LikeImg } from "./LikedCard.style";
import LikeButtonComp from "./likeButtonSection/LikeButtonComp";
import * as Api from "../../../../api";

export default function LikedMusicCard({ music, isEditable }) {
  const [isLiked, setIsLiked] = useState(true);
  const handleClick = async () => {
    try {
      // 로그인 했을 경우 좋아요 항목에 추가/삭제 요청
      await Api.put("like/exercise", { music: music.title });
      setIsLiked((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Layout>
      <LikeImg src={music?.image_link} />
      <h5>{music.title}</h5>
      {isEditable && <LikeButtonComp isLiked={isLiked} onClick={handleClick} />}
    </Layout>
  );
}

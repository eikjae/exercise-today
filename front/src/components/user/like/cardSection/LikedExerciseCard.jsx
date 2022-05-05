import React, { useState } from "react";
import { Layout, LikeImg, SmallTitle } from "./LikedCard.style";
import { LikeButtonComp } from "./likeButtonSection/LikeButtonComp";
import * as Api from "../../../../api";

export default function LikedExerciseCard({ exercise, isEditable }) {
  const [isLiked, setIsLiked] = useState(true);
  const handleClick = async () => {
    try {
      // 로그인 했을 경우 좋아요 항목에 추가/삭제 요청
      await Api.put("like/exercise", { exercise: exercise.name });
      setIsLiked((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Layout>
      <LikeImg src={exercise.gifUrl} />
      <SmallTitle>{exercise.name}</SmallTitle>
      {isEditable && <LikeButtonComp isLiked={isLiked} onClick={handleClick} />}
    </Layout>
  );
}

import React, { useState } from "react";
import { Layout, LikeImg, CardTitle, CardSubTitle } from "./LikedCard.style";
import { LikeButtonComp } from "./likeButtonSection/LikeButtonComp";
import * as Api from "../../../../api";

export default function LikedFoodCard({ food, isEditable }) {
  const [isLiked, setIsLiked] = useState(true);
  const handleClick = async () => {
    try {
      // 로그인 했을 경우 좋아요 항목에 추가/삭제 요청
      await Api.put("like/food", { food: food.category });
      setIsLiked((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Layout>
      <LikeImg src={food.imgurl} />
      <CardTitle>{food.category}</CardTitle>
      <CardSubTitle>
        {food.calories}kcal/{food.unit}
      </CardSubTitle>
      {isEditable && <LikeButtonComp isLiked={isLiked} onClick={handleClick} />}
    </Layout>
  );
}

import React from "react";
import {
  LikeWrapper,
  LikeButton,
  NotLikeIcon,
  LikeIcon,
} from "./FoodBadgeLike.style";

export default function FoodBadgeLike({ isLiked, onClick }) {
  return (
    <LikeWrapper>
      <LikeButton onClick={onClick}>
        {isLiked ? <LikeIcon /> : <NotLikeIcon />}
      </LikeButton>
    </LikeWrapper>
  );
}

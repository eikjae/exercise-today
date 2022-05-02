import React from "react";
import {
  LikeWrapper,
  LikeButton,
  NotLikeIcon,
  LikeIcon,
} from "./BackImageLike.style";

export default function BackImageLike({ isLiked, onClick }) {
  return (
    <LikeWrapper>
      <LikeButton onClick={onClick}>
        {isLiked ? <LikeIcon /> : <NotLikeIcon />}
      </LikeButton>
    </LikeWrapper>
  );
}

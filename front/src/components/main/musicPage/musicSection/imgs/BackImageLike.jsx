import React from "react";
import {
  LikeWrapper,
  LikeButton,
  NotLikeIcon,
  LikeIcon,
} from "./BackImageLike.style";

export default function BackImageLike({ isLiked }) {
  return (
    <LikeWrapper>
      <LikeButton>{isLiked ? <LikeIcon /> : <NotLikeIcon />}</LikeButton>
    </LikeWrapper>
  );
}

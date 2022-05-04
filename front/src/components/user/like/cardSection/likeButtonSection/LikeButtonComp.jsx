import React from "react";
import {
  LikeWrapper,
  LikeButton,
  NotLikeIcon,
  LikeIcon,
} from "./LikeButtonComp.style";

export default function LikeButtonComp({ isLiked, onClick }) {
  return (
    <LikeWrapper>
      <LikeButton onClick={onClick}>
        {isLiked ? <LikeIcon /> : <NotLikeIcon />}
      </LikeButton>
    </LikeWrapper>
  );
}

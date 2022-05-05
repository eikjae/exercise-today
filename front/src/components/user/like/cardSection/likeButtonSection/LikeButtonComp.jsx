import React from "react";
import {
  LikePageWrapper,
  LikePageButton,
  LikeWrapper,
  LikeButton,
  NotLikeIcon,
  LikeIcon,
} from "./LikeButtonComp.style";

export function LikePageButtonComp({ onClick }) {
  return (
    <LikePageWrapper>
      <LikePageButton onClick={onClick}>북마크 페이지</LikePageButton>
    </LikePageWrapper>
  );
}

export function LikeButtonComp({ isLiked, onClick }) {
  return (
    <LikeWrapper>
      <LikeButton onClick={onClick}>
        {isLiked ? <LikeIcon /> : <NotLikeIcon />}
      </LikeButton>
    </LikeWrapper>
  );
}

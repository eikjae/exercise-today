import React from "react";
import {
  LikePageWrapper,
  LikePageButton,
  LikeWrapper,
  LikeButton,
  NotLikeIcon,
  LikeIcon,
} from "./UserLikeButton.style";

export function UserLikePageButton({ onClick }) {
  return (
    <LikePageWrapper>
      <LikePageButton onClick={onClick}>북마크 페이지로</LikePageButton>
    </LikePageWrapper>
  );
}

export function UserLikeButton({ isLiked, onClick }) {
  return (
    <LikeWrapper>
      <LikeButton onClick={onClick}>
        {isLiked ? <LikeIcon /> : <NotLikeIcon />}
      </LikeButton>
    </LikeWrapper>
  );
}

import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const handleClickLike = () => {
    onClick();
    let message = "";
    if (isLiked) {
      message = "❌좋아요가 취소되었습니다!";
    } else {
      message = "⭕좋아요가 복구되었습니다!";
    }
    return toast.success(message);
  };
  return (
    <LikeWrapper>
      <LikeButton onClick={handleClickLike}>
        {isLiked ? <LikeIcon /> : <NotLikeIcon />}
      </LikeButton>
    </LikeWrapper>
  );
}

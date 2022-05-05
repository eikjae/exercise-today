/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import * as Api from "../../../api";
import {
  Layout,
  CardBody,
  CardImg,
  CardTitle,
  CardSubTitle,
  CardTextWrapper,
  NetworkButtonWrapper,
} from "./UserCard.style";
import {
  UserLikePageButton,
  UserLikeButton,
} from "./likeButtonSection/UserLikeButton";

function UserCard({ user, setIsEditing, isEditable, likedUsers, isNetwork }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // 네트워크일 경우 like를 표시해야 함
    if (isNetwork) {
      const isExistUser = likedUsers.findIndex(
        (currentUserId) => currentUserId === user.id
      );
      if (isExistUser !== -1) {
        // 좋아요 목록에 존재하는 유저일 경우 liked 표시
        setIsLiked(true);
      } else {
        // 아닐 경우 liked 표시 하지 않음
        setIsLiked(false);
      }
    }
  }, [likedUsers]);

  // 클릭시 북마크 페이지로 이동시킴
  const handleClickLikePage = () => {
    navigate(`/like/${user.id}`);
  };

  // 좋아요 수정
  const handleClickLike = async () => {
    try {
      await Api.put("like/person", { person: user.id });
      setIsLiked((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <CardBody>
        <CardImg src={user?.imageLink} alt="유저 프로필 사진" />
        <CardTitle>{user?.name}</CardTitle>
        <CardSubTitle>{user?.email}</CardSubTitle>
        <CardTextWrapper>
          <span>{user?.description}</span>
        </CardTextWrapper>

        {isEditable && (
          <Button
            variant="outline-info"
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            편집
          </Button>
        )}

        {isNetwork && (
          <NetworkButtonWrapper>
            <UserLikePageButton onClick={handleClickLikePage} />
            <UserLikeButton isLiked={isLiked} onClick={handleClickLike} />
          </NetworkButtonWrapper>
        )}
      </CardBody>
    </Layout>
  );
}

export default UserCard;

import UserCard from "../../userSection/UserCard";

export default function LikedFriendCard({ friend, isEditable }) {
  return (
    <UserCard
      key={friend?.id}
      user={friend}
      isLikePage
      isLikeEditable={isEditable}
    />
  );
}

import React from "react";
import LikedFriendCard from "../cardSection/LikedFriendCard";
import { FriendLayout } from "./LikedTab.style";

export default function LikedFriendTab({ likedFriends, isEditable }) {
  return (
    <FriendLayout>
      {likedFriends.map((friend, idx) => (
        <LikedFriendCard key={idx} friend={friend} isEditable={isEditable} />
      ))}
    </FriendLayout>
  );
}

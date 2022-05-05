import React from "react";
import LikedFriendCard from "../cardSection/LikedFriendCard";
import { Layout } from "./LikedTab.style";

export default function LikedFriendTab({ likedFriends, isEditable }) {
  return (
    <Layout>
      {likedFriends.map((friend, idx) => (
        <LikedFriendCard key={idx} friend={friend} isEditable={isEditable} />
      ))}
    </Layout>
  );
}

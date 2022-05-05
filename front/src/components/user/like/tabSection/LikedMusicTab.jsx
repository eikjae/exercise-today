import React from "react";
import LikedMusicCard from "../cardSection/LikedMusicCard";
import { Layout } from "./LikedTab.style";

export default function LikedMusicTab({ likedMusics, isEditable }) {
  return (
    <Layout>
      {likedMusics.map((music, idx) => (
        <LikedMusicCard key={idx} music={music} isEditable={isEditable} />
      ))}
    </Layout>
  );
}

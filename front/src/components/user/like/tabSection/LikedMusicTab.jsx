import React from "react";
import LikedMusicCard from "../cardSection/LikedMusicCard";
import { Layout } from "./LikedTab.style";

export default function LikedMusicTab({ likedMusics }) {
  return (
    <Layout>
      {likedMusics.map((music, idx) => (
        <LikedMusicCard key={idx} music={music} />
      ))}
    </Layout>
  );
}

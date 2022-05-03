import React from "react";
import LikedMusicCard from "../cardSection/LikedMusicCard";

export default function LikedMusicTab({ likedMusics }) {
  return <h1>LikedMusicTab</h1>;
  return likedMusics.map((music, idx) => (
    <LikedMusicCard key={idx} music={music} />
  ));
}

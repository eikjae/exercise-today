import React from "react";
import { Layout, LikeImg } from "./LikedCard.style";

export default function LikedMusicCard({ music }) {
  return (
    <Layout>
      <LikeImg src={music?.image_link} />
      <h5>{music.title}</h5>
    </Layout>
  );
}

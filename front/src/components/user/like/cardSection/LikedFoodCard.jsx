import React from "react";
import { Layout, LikeImg } from "./LikedCard.style";

export default function LikedFoodCard({ food }) {
  return (
    <Layout>
      {/* <LikeImg src={food} /> */}
      <h5>{food.category}</h5>
    </Layout>
  );
}

import React from "react";
import LikedFoodCard from "../cardSection/LikedFoodCard";
import { Layout } from "./LikedTab.style";
export default function LikedFoodTab({ likedFoods }) {
  return (
    <Layout>
      {likedFoods.map((food, idx) => (
        <LikedFoodCard key={idx} food={food} />
      ))}
    </Layout>
  );
}

import React from "react";
import LikedFoodCard from "../cardSection/LikedFoodCard";

export default function LikedFoodTab({ likedFoods }) {
  return <h1>LikedFoodTab</h1>;
  return likedFoods.map((food, idx) => <LikedFoodCard key={idx} food={food} />);
}

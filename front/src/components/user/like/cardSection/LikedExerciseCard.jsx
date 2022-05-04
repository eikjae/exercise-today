import React from "react";
import { Layout, LikeImg } from "./LikedCard.style";

export default function LikedExerciseCard({ exercise }) {
  return (
    <Layout>
      <LikeImg src={exercise.gifUrl} />
      <h5>{exercise.name}</h5>
    </Layout>
  );
}

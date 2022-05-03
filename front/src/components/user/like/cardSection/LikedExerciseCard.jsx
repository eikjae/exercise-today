import React from "react";

import { Layout, ExerciseImg } from "./LikedCard.style";

export default function LikedExerciseCard({ exercise }) {
  return (
    <Layout>
      <ExerciseImg src={exercise.gifUrl} />
    </Layout>
  );
}

import React from "react";
import LikedExerciseCard from "../cardSection/LikedExerciseCard";
import { Layout } from "./LikedTab.style";
export default function LikedExerciseTab({ likedExercises }) {
  // return <h1>LikedExerciseTab</h1>;
  return (
    <Layout>
      {likedExercises.map((exercise, idx) => (
        <LikedExerciseCard key={idx} exercise={exercise} />
      ))}
    </Layout>
  );
}

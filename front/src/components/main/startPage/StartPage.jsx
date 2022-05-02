/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  CalorieExerciseGraph,
  DiabetesGraph,
  ExerciseCalorieGraph,
  FoodAndExerciseGraph,
  FoodCalorieGraph,
  HeartStrokeGraph,
  MusicByYearGraph,
  PartExerciseGraph,
  WeightGraph,
} from "./graphSection/all_graph";

import HealthAndHappinessGraph from "./graphSection/HealthAndHappinessGraph.png";

export default function StartPage() {
  return (
    <>
      <CalorieExerciseGraph />
      <DiabetesGraph />
      <ExerciseCalorieGraph />
      <FoodAndExerciseGraph />
      <FoodCalorieGraph />
      <img src={HealthAndHappinessGraph} />
      <HeartStrokeGraph />
      <MusicByYearGraph />
      <PartExerciseGraph />
      <WeightGraph />
    </>
  );
}

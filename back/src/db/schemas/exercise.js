import { Schema, model } from "mongoose";

const ExerciseSchema = new Schema({
  exercise: {
    type: String,
    required: true,
  },
  calories_per_lb: {
    type: Number,
    required: true,
  },
  weather_influence: {
    type: Number,
    required: true,
  },
});

const ExerciseModel = model("Exercise", ExerciseSchema);

export { ExerciseModel };

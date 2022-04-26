import { Schema, model } from "mongoose";

const ExerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  CaloriesPerLb: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
});

const ExerciseModel = model("Exercise", ExerciseSchema);

export { ExerciseModel };

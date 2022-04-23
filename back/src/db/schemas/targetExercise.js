import { Schema, model } from "mongoose";

const TargetExerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bodyPart: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
    required: true,
  },
  gifUrl: {
    type: String,
  },
  id: {
    type: String,
  },
  target: {
    type: String,
  },
});

const TargetExerciseModel = model("TargetExercise", TargetExerciseSchema);

export { TargetExerciseModel };

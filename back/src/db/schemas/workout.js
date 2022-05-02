import { Schema, model } from "mongoose";

const WorkoutSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    whenDate: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const WorkoutModel = model("Workout", WorkoutSchema);

export { WorkoutModel };

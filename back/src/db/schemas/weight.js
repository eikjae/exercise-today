import { Schema, model } from "mongoose";

const WeightSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    whenDate: {
      type: Date,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const WeightModel = model("Weight", WeightSchema);

export { WeightModel };

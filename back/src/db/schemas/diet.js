import { Schema, model } from "mongoose";

const DietSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    whenDate: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    volume: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DietModel = model("Diet", DietSchema);

export { DietModel };

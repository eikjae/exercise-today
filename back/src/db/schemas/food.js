import { Schema, model } from "mongoose";

const FoodSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FoodModel = model("Food", FoodSchema);

export { FoodModel };

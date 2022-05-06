import { Schema, model } from "mongoose";

const DietImageSchema = new Schema(
  {
    itemId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    userId: {
      type: String,
      required: true,
    },
    whenDate: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    imgurl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DietImageModel = model("DietImage", DietImageSchema);

export { DietImageModel };

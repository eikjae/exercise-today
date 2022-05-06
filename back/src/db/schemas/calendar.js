import { Schema, model } from "mongoose";

const CaloriesSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  calorie: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
});

const CalendarSchema = new Schema(
  {
    itemId: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: String,
      required: true,
    },
    whenDate: {
      type: Date,
      required: true,
    },
    calories: [CaloriesSchema],
  },
  {
    timestamps: true,
  }
);

const CalendarModel = model("Calendar", CalendarSchema);

export { CalendarModel };

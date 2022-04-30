import { Schema, model } from "mongoose";

const CaloriesSchema = new Schema({
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
    },
    userId: {
      type: String,
      required: true,
    },
    whenDate: {
      type: String,
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

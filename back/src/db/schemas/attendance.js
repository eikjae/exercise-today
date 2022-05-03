import { Schema, model } from "mongoose";

const AttendanceSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    whenDate: {
      type: String,
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

const AttendanceModel = model("Attendance", AttendanceSchema);

export { AttendanceModel };

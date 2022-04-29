import { AttendanceModel } from "../schemas/attendance";

export class Attendance {
  static async create({ newAttendance }) {
    const createdAttendance = await AttendanceModel.create(newAttendance);
    return createdAttendance;
  }

  static async findByDate({ userId, whenDate }) {
    const attendance = await AttendanceModel.findOne({ userId, whenDate });
    return attendance;
  }

  static async deleteByUserId({ userId }) {
    const result = await AttendanceModel.deleteMany({ userId });
    return result;
  }
}

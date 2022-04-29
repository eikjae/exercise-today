import { Attendance } from "../db";

class attendanceService {
  static async addAttendance({ userId, whenDate, weight }) {
    const attendance = await Attendance.findByDate({
      userId,
      whenDate,
    });

    if (attendance) {
      const errorMessage = "이미 출석체크 했습니다.";
      throw new Error(errorMessage);
    }

    if (weight === undefined) {
      const errorMessage = "몸무게를 입력해주세요";
      throw new Error(errorMessage);
    }

    const newAttendance = { userId, whenDate, weight };

    const createdAttendance = await Attendance.create({ newAttendance });
    createdAttendance.errorMessage = null;

    return createdAttendance;
  }

  static async getAttendance({ userId, whenDate }) {
    const attendance = await Attendance.findByDate({
      userId,
      whenDate,
    });
    return attendance;
  }

  static async deleteAttendance({ userId }) {
    await Attendance.deleteByUserId({ userId });
  }
}
export { attendanceService };

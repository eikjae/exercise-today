import { AttendanceModel } from "../schemas/attendance";

export class MyPage {
  static async findByUserId({ userId }) {
    const attendance = await AttendanceModel.find(
      { userId },
      "whenDate weight"
    );
    return attendance;
  }
}

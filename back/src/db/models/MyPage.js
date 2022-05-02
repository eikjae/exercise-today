import { AttendanceModel } from "../schemas/attendance";
import { todayDate, lastWeek } from "../../utils/date-calculator.js";

export class MyPage {
  static async findByUserId({ userId }) {
    const attendance = await AttendanceModel.find(
      { userId },
      "whenDate weight"
    );
    return attendance;
  }

  static async findByUserIdWeek({ userId }) {
    const attendance = await AttendanceModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastWeek(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return attendance;
  }
}

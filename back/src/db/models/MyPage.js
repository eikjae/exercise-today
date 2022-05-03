import { AttendanceModel } from "../schemas/attendance";
import {
  todayDate,
  lastWeek,
  lastMonth,
  lastThreeMonth,
} from "../../utils/date-calculator.js";

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

  static async findByUserIdMonth({ userId }) {
    const attendance = await AttendanceModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastMonth(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return attendance;
  }

  static async findByUserIdThreeMonth({ userId }) {
    const attendance = await AttendanceModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastThreeMonth(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return attendance;
  }
}

import { AttendanceModel } from "../schemas/attendance";
import {
  todayDate,
  lastWeek,
  lastMonth,
  lastThreeMonth,
  lastSixMonth,
  lastYear,
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

  static async findByUserIdSixMonth({ userId }) {
    const attendance = await AttendanceModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastSixMonth(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return attendance;
  }

  static async findByUserIdYear({ userId }) {
    const attendance = await AttendanceModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastYear(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return attendance;
  }

  static async findByUserIdSelectedDate({ userId, startDate, finishDate }) {
    const attendance = await AttendanceModel.find(
      {
        $and: [{ userId }, { whenDate: { $gte: startDate, $lte: finishDate } }],
      },
      "whenDate weight"
    );
    return attendance;
  }
}

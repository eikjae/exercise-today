import { WeightModel } from "../schemas/weight";
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
    const weight = await WeightModel.find({ userId }, "whenDate weight");
    return weight;
  }

  static async findByUserIdWeek({ userId }) {
    const weight = await WeightModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastWeek(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return weight;
  }

  static async findByUserIdMonth({ userId }) {
    const weight = await WeightModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastMonth(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return weight;
  }

  static async findByUserIdThreeMonth({ userId }) {
    const weight = await WeightModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastThreeMonth(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return weight;
  }

  static async findByUserIdSixMonth({ userId }) {
    const weight = await WeightModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastSixMonth(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return weight;
  }

  static async findByUserIdYear({ userId }) {
    const weight = await WeightModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastYear(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return weight;
  }

  static async findByUserIdSelectedDate({ userId, startDate, finishDate }) {
    const weight = await WeightModel.find(
      {
        $and: [{ userId }, { whenDate: { $gte: startDate, $lte: finishDate } }],
      },
      "whenDate weight"
    );
    return weight;
  }
}

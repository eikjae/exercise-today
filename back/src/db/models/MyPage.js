import { AttendanceModel } from "../schemas/attendance";
import { CalendarModel } from "../schemas/calendar";
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
    const weightInfo = await AttendanceModel.find(
      { userId },
      "whenDate weight"
    );
    return weightInfo;
  }

  static async findByUserIdWeek({ userId }) {
    const weightInfo = await AttendanceModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastWeek(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return weightInfo;
  }

  static async findByUserIdMonth({ userId }) {
    const weightInfo = await AttendanceModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastMonth(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return weightInfo;
  }

  static async findByUserIdThreeMonth({ userId }) {
    const weightInfo = await AttendanceModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastThreeMonth(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return weightInfo;
  }

  static async findByUserIdSixMonth({ userId }) {
    const weightInfo = await AttendanceModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastSixMonth(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return weightInfo;
  }

  static async findByUserIdYear({ userId }) {
    const weightInfo = await AttendanceModel.find(
      {
        $and: [
          { userId },
          { whenDate: { $gte: lastYear(), $lte: todayDate() } },
        ],
      },
      "whenDate weight"
    );
    return weightInfo;
  }

  static async findByUserIdSelectedDate({ userId, startDate, finishDate }) {
    const weightInfo = await AttendanceModel.find(
      {
        $and: [{ userId }, { whenDate: { $gte: startDate, $lte: finishDate } }],
      },
      "whenDate weight"
    );
    return weightInfo;
  }

  static async findDietByUserId({ userId }) {
    const dietInfo = await CalendarModel.find(
      { userId },
      "whenDate calories.type calories.calorie"
    );

    const ansList = dietInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie =
        obj.calories[0].calorie +
        obj.calories[1].calorie +
        obj.calories[2].calorie;
      return { whenDate, calorie };
    });

    return ansList;
  }

  static async findDietWeekByUserId({ userId }) {
    const dietInfo = await CalendarModel.find(
      {
        $and: [
          { userId },
          {
            whenDate: {
              $gte: lastWeek(),
              $lte: todayDate(),
            },
          },
        ],
      },
      "whenDate calories.type calories.calorie"
    );
    const ansList = dietInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie =
        obj.calories[0].calorie +
        obj.calories[1].calorie +
        obj.calories[2].calorie;
      return { whenDate, calorie };
    });

    return ansList;
  }

  static async findDietMonthByUserId({ userId }) {
    const dietInfo = await CalendarModel.find(
      {
        $and: [
          { userId },
          {
            whenDate: {
              $gte: lastMonth(),
              $lte: todayDate(),
            },
          },
        ],
      },
      "whenDate calories.type calories.calorie"
    );
    const ansList = dietInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie =
        obj.calories[0].calorie +
        obj.calories[1].calorie +
        obj.calories[2].calorie;
      return { whenDate, calorie };
    });

    return ansList;
  }

  static async findDietThreeMonthByUserId({ userId }) {
    const dietInfo = await CalendarModel.find(
      {
        $and: [
          { userId },
          {
            whenDate: {
              $gte: lastThreeMonth(),
              $lte: todayDate(),
            },
          },
        ],
      },
      "whenDate calories.type calories.calorie"
    );
    const ansList = dietInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie =
        obj.calories[0].calorie +
        obj.calories[1].calorie +
        obj.calories[2].calorie;
      return { whenDate, calorie };
    });

    return ansList;
  }

  static async findDietSixMonthByUserId({ userId }) {
    const dietInfo = await CalendarModel.find(
      {
        $and: [
          { userId },
          {
            whenDate: {
              $gte: lastSixMonth(),
              $lte: todayDate(),
            },
          },
        ],
      },
      "whenDate calories.type calories.calorie"
    );
    const ansList = dietInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie =
        obj.calories[0].calorie +
        obj.calories[1].calorie +
        obj.calories[2].calorie;
      return { whenDate, calorie };
    });

    return ansList;
  }

  static async findDietYearByUserId({ userId }) {
    const dietInfo = await CalendarModel.find(
      {
        $and: [
          { userId },
          {
            whenDate: {
              $gte: lastYear(),
              $lte: todayDate(),
            },
          },
        ],
      },
      "whenDate calories.type calories.calorie"
    );
    const ansList = dietInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie =
        obj.calories[0].calorie +
        obj.calories[1].calorie +
        obj.calories[2].calorie;
      return { whenDate, calorie };
    });

    return ansList;
  }

  static async findDietSelectedDateByUserId({ userId, startDate, finishDate }) {
    const dietInfo = await CalendarModel.find(
      {
        $and: [
          { userId },
          {
            whenDate: {
              $gte: startDate,
              $lte: finishDate,
            },
          },
        ],
      },
      "whenDate calories.type calories.calorie"
    );
    const ansList = dietInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie =
        obj.calories[0].calorie +
        obj.calories[1].calorie +
        obj.calories[2].calorie;
      return { whenDate, calorie };
    });

    return ansList;
  }

  static async findWorkoutByUserId({ userId }) {
    const workoutInfo = await CalendarModel.find(
      { userId },
      "whenDate calories.type calories.calorie"
    );

    const ansList = workoutInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie = obj.calories[3].calorie;
      return { whenDate, calorie };
    });

    return ansList;
  }

  static async findWorkoutWeekByUserId({ userId }) {
    const dietInfo = await CalendarModel.find(
      {
        $and: [
          { userId },
          {
            whenDate: {
              $gte: lastWeek(),
              $lte: todayDate(),
            },
          },
        ],
      },
      "whenDate calories.type calories.calorie"
    );
    const ansList = dietInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie = obj.calories[3].calorie;
      return { whenDate, calorie };
    });

    return ansList;
  }

  static async findWorkoutMonthByUserId({ userId }) {
    const dietInfo = await CalendarModel.find(
      {
        $and: [
          { userId },
          {
            whenDate: {
              $gte: lastMonth(),
              $lte: todayDate(),
            },
          },
        ],
      },
      "whenDate calories.type calories.calorie"
    );
    const ansList = dietInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie = obj.calories[3].calorie;
      return { whenDate, calorie };
    });

    return ansList;
  }

  static async findWorkoutThreeMonthByUserId({ userId }) {
    const dietInfo = await CalendarModel.find(
      {
        $and: [
          { userId },
          {
            whenDate: {
              $gte: lastThreeMonth(),
              $lte: todayDate(),
            },
          },
        ],
      },
      "whenDate calories.type calories.calorie"
    );
    const ansList = dietInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie = obj.calories[3].calorie;
      return { whenDate, calorie };
    });

    return ansList;
  }

  static async findWorkoutSixMonthByUserId({ userId }) {
    const dietInfo = await CalendarModel.find(
      {
        $and: [
          { userId },
          {
            whenDate: {
              $gte: lastSixMonth(),
              $lte: todayDate(),
            },
          },
        ],
      },
      "whenDate calories.type calories.calorie"
    );
    const ansList = dietInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie = obj.calories[3].calorie;
      return { whenDate, calorie };
    });

    return ansList;
  }

  static async findWorkoutYearByUserId({ userId }) {
    const dietInfo = await CalendarModel.find(
      {
        $and: [
          { userId },
          {
            whenDate: {
              $gte: lastYear(),
              $lte: todayDate(),
            },
          },
        ],
      },
      "whenDate calories.type calories.calorie"
    );
    const ansList = dietInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie = obj.calories[3].calorie;
      return { whenDate, calorie };
    });

    return ansList;
  }

  static async findWorkoutSelectedDateByUserId({
    userId,
    startDate,
    finishDate,
  }) {
    const workoutInfo = await CalendarModel.find(
      {
        $and: [
          { userId },
          {
            whenDate: {
              $gte: startDate,
              $lte: finishDate,
            },
          },
        ],
      },
      "whenDate calories.type calories.calorie"
    );
    const ansList = workoutInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie = obj.calories[3].calorie;

      return { whenDate, calorie };
    });

    return ansList;
  }

  static async findCalorieByUserId({ userId }) {
    const calorieInfo = await CalendarModel.find(
      { userId },
      "whenDate calories.type calories.calorie"
    );

    const ansList = calorieInfo.map((obj) => {
      const whenDate = obj.whenDate;
      const calorie =
        obj.calories[0].calorie +
        obj.calories[1].calorie +
        obj.calories[2].calorie -
        obj.calories[3].calorie;
      return { whenDate, calorie };
    });

    return ansList;
  }
}

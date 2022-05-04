import { MyPage } from "../db";

class myPageService {
  static async getWeight({ userId }) {
    const weightInfo = await MyPage.findByUserId({
      userId,
    });
    return weightInfo;
  }

  static async getWeightWeek({ userId }) {
    const weightInfo = await MyPage.findByUserIdWeek({
      userId,
    });
    return weightInfo;
  }

  static async getWeightMonth({ userId }) {
    const weightInfo = await MyPage.findByUserIdMonth({
      userId,
    });
    return weightInfo;
  }

  static async getWeightThreeMonth({ userId }) {
    const weightInfo = await MyPage.findByUserIdThreeMonth({
      userId,
    });
    return weightInfo;
  }

  static async getWeightSixMonth({ userId }) {
    const weightInfo = await MyPage.findByUserIdSixMonth({
      userId,
    });
    return weightInfo;
  }

  static async getWeightYear({ userId }) {
    const weightInfo = await MyPage.findByUserIdYear({
      userId,
    });
    return weightInfo;
  }

  static async getWeightSelectedDate({ userId, startDate, finishDate }) {
    const weightInfo = await MyPage.findByUserIdSelectedDate({
      userId,
      startDate,
      finishDate,
    });
    return weightInfo;
  }

  static async getDiet({ userId }) {
    const dietInfo = await MyPage.findDietByUserId({
      userId,
    });
    return dietInfo;
  }

  static async getDietWeek({ userId }) {
    const dietInfo = await MyPage.findDietWeekByUserId({
      userId,
    });
    return dietInfo;
  }

  static async getDietMonth({ userId }) {
    const dietInfo = await MyPage.findDietMonthByUserId({
      userId,
    });
    return dietInfo;
  }

  static async getDietThreeMonth({ userId }) {
    const dietInfo = await MyPage.findDietThreeMonthByUserId({
      userId,
    });
    return dietInfo;
  }

  static async getDietSixMonth({ userId }) {
    const dietInfo = await MyPage.findDietSixMonthByUserId({
      userId,
    });
    return dietInfo;
  }
}

export { myPageService };

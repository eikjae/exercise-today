import { MyPage } from "../db";

class myPageService {
  static async getWeight({ userId }) {
    const weight = await MyPage.findByUserId({
      userId,
    });
    return weight;
  }

  static async getWeightWeek({ userId }) {
    const weight = await MyPage.findByUserIdWeek({
      userId,
    });
    return weight;
  }

  static async getWeightMonth({ userId }) {
    const weight = await MyPage.findByUserIdMonth({
      userId,
    });
    return weight;
  }

  static async getWeightThreeMonth({ userId }) {
    const weight = await MyPage.findByUserIdThreeMonth({
      userId,
    });
    return weight;
  }

  static async getWeightSixMonth({ userId }) {
    const weight = await MyPage.findByUserIdSixMonth({
      userId,
    });
    return weight;
  }

  static async getWeightYear({ userId }) {
    const weight = await MyPage.findByUserIdYear({
      userId,
    });
    return weight;
  }

  static async getWeightSelectedDate({ userId, startDate, finishDate }) {
    const weight = await MyPage.findByUserIdSelectedDate({
      userId,
      startDate,
      finishDate,
    });
    return weight;
  }
}

export { myPageService };

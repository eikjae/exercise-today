import { MyPage } from "../db";

class myPageService {
  static async getWeight({ userId }) {
    const attendance = await MyPage.findByUserId({
      userId,
    });
    return attendance;
  }

  static async getWeightWeek({ userId }) {
    const attendance = await MyPage.findByUserIdWeek({
      userId,
    });
    return attendance;
  }

  static async getWeightMonth({ userId }) {
    const attendance = await MyPage.findByUserIdMonth({
      userId,
    });
    return attendance;
  }

  static async getWeightThreeMonth({ userId }) {
    const attendance = await MyPage.findByUserIdThreeMonth({
      userId,
    });
    return attendance;
  }

  static async getWeightSixMonth({ userId }) {
    const attendance = await MyPage.findByUserIdSixMonth({
      userId,
    });
    return attendance;
  }
}

export { myPageService };

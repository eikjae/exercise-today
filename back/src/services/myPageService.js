import { MyPage } from "../db";

class myPageService {
  static async getWeight({ userId }) {
    const attendance = await MyPage.findByUserId({
      userId,
    });
    return attendance;
  }
}
export { myPageService };

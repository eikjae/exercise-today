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

  static async getDiet({ userId }) {
    const calorie = await MyPage.findDietByUserId({
      userId,
    });
    return calorie;
  }

  static async getDietWeek({ userId }) {
    const calorie = await MyPage.findDietWeekByUserId({
      userId,
    });
    return calorie;
  }

  static async getDietMonth({ userId }) {
    const calorie = await MyPage.findDietMonthByUserId({
      userId,
    });
    return calorie;
  }

  static async getDietThreeMonth({ userId }) {
    const calorie = await MyPage.findDietThreeMonthByUserId({
      userId,
    });
    return calorie;
  }

  static async getDietSixMonth({ userId }) {
    const calorie = await MyPage.findDietSixMonthByUserId({
      userId,
    });
    return calorie;
  }

  static async getDietYear({ userId }) {
    const calorie = await MyPage.findDietYearByUserId({
      userId,
    });
    return calorie;
  }

  static async getDietSelectedDate({ userId, startDate, finishDate }) {
    const calorie = await MyPage.findDietSelectedDateByUserId({
      userId,
      startDate,
      finishDate,
    });
    return calorie;
  }

  static async getWorkout({ userId }) {
    const calorie = await MyPage.findWorkoutByUserId({
      userId,
    });
    return calorie;
  }

  static async getWorkoutWeek({ userId }) {
    const calorie = await MyPage.findWorkoutWeekByUserId({
      userId,
    });
    return calorie;
  }

  static async getWorkoutMonth({ userId }) {
    const calorie = await MyPage.findWorkoutMonthByUserId({
      userId,
    });
    return calorie;
  }

  static async getWorkoutThreeMonth({ userId }) {
    const calorie = await MyPage.findWorkoutThreeMonthByUserId({
      userId,
    });
    return calorie;
  }

  static async getWorkoutSixMonth({ userId }) {
    const calorie = await MyPage.findWorkoutSixMonthByUserId({
      userId,
    });
    return calorie;
  }

  static async getWorkoutYear({ userId }) {
    const calorie = await MyPage.findWorkoutYearByUserId({
      userId,
    });
    return calorie;
  }

  static async getWorkoutSelectedDate({ userId, startDate, finishDate }) {
    const calorie = await MyPage.findWorkoutSelectedDateByUserId({
      userId,
      startDate,
      finishDate,
    });
    return calorie;
  }

  static async getCalorie({ userId }) {
    const calorie = await MyPage.findCalorieByUserId({
      userId,
    });
    return calorie;
  }

  static async getCalorieWeek({ userId }) {
    const calorie = await MyPage.findCalorieWeekByUserId({
      userId,
    });
    return calorie;
  }

  static async getCalorieMonth({ userId }) {
    const calorie = await MyPage.findCalorieMonthByUserId({
      userId,
    });
    return calorie;
  }

  static async getCalorieThreeMonth({ userId }) {
    const calorie = await MyPage.findCalorieThreeMonthByUserId({
      userId,
    });
    return calorie;
  }

  static async getCalorieSixMonth({ userId }) {
    const calorie = await MyPage.findCalorieSixMonthByUserId({
      userId,
    });
    return calorie;
  }

  static async getCalorieYear({ userId }) {
    const calorie = await MyPage.findCalorieYearByUserId({
      userId,
    });
    return calorie;
  }

  static async getCalorieSelectedDate({ userId, startDate, finishDate }) {
    const calorie = await MyPage.findCalorieSelectedDateByUserId({
      userId,
      startDate,
      finishDate,
    });
    return calorie;
  }
}

export { myPageService };

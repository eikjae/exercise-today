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

  static async getDietYear({ userId }) {
    const dietInfo = await MyPage.findDietYearByUserId({
      userId,
    });
    return dietInfo;
  }

  static async getDietSelectedDate({ userId, startDate, finishDate }) {
    const dietInfo = await MyPage.findDietSelectedDateByUserId({
      userId,
      startDate,
      finishDate,
    });
    return dietInfo;
  }

  static async getWorkout({ userId }) {
    const workoutInfo = await MyPage.findWorkoutByUserId({
      userId,
    });
    return workoutInfo;
  }

  static async getWorkoutWeek({ userId }) {
    const workoutInfo = await MyPage.findWorkoutWeekByUserId({
      userId,
    });
    return workoutInfo;
  }

  static async getWorkoutMonth({ userId }) {
    const workoutInfo = await MyPage.findWorkoutMonthByUserId({
      userId,
    });
    return workoutInfo;
  }

  static async getWorkoutThreeMonth({ userId }) {
    const workoutInfo = await MyPage.findWorkoutThreeMonthByUserId({
      userId,
    });
    return workoutInfo;
  }

  static async getWorkoutSixMonth({ userId }) {
    const workoutInfo = await MyPage.findWorkoutSixMonthByUserId({
      userId,
    });
    return workoutInfo;
  }

  static async getWorkoutYear({ userId }) {
    const workoutInfo = await MyPage.findWorkoutYearByUserId({
      userId,
    });
    return workoutInfo;
  }

  static async getWorkoutSelectedDate({ userId, startDate, finishDate }) {
    const workoutInfo = await MyPage.findWorkoutSelectedDateByUserId({
      userId,
      startDate,
      finishDate,
    });
    return workoutInfo;
  }

  static async getCalorie({ userId }) {
    const calorieInfo = await MyPage.findCalorieByUserId({
      userId,
    });
    return calorieInfo;
  }

  static async getCalorieWeek({ userId }) {
    const calorieInfo = await MyPage.findCalorieWeekByUserId({
      userId,
    });
    return calorieInfo;
  }

  static async getCalorieMonth({ userId }) {
    const calorieInfo = await MyPage.findCalorieMonthByUserId({
      userId,
    });
    return calorieInfo;
  }

  static async getCalorieThreeMonth({ userId }) {
    const calorieInfo = await MyPage.findCalorieThreeMonthByUserId({
      userId,
    });
    return calorieInfo;
  }
}

export { myPageService };

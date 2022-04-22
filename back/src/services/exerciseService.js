import { Exercise } from "../db";

class exerciseService {
  static async calculateBmi({ height, weight }) {
    const bmi = weight / (height * 0.01) ** 2;
    const refindBmi = bmi.toFixed(2);
    if (refindBmi == "NaN") {
      const errorMessage = "키와 몸무게를 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return refindBmi;
  }

  static async calculateCalories({ weight, name }) {
    const exercise = await Exercise.findByName({
      name,
    });

    const caloriesPerLb = exercise.CaloriesPerLb;
    // 1 kg == 2.205 lb
    const caloriesPerHour = weight * 2.205 * caloriesPerLb;
    const refindCaloriesPerHour = caloriesPerHour.toFixed(2);
    if (refindCaloriesPerHour == "NaN") {
      const errorMessage = "몸무게와 운동 이름을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return refindCaloriesPerHour;
  }

  static async timeinfo({ weight, category, calories }) {
    const exerciseList = await Exercise.findByCategory({
      category,
    });
    console.log("exerciseList:", exerciseList);
    const timeList = exerciseList.map((exercise) => {
      const name = exercise.name;
      console.log("name:", name);
      // 1시간 기준 소모되는 칼로리 = 몸무게(kg) * 2.205 * (1시간 기준 소모 칼로리 / 1 lb)
      const CaloriesPerLb = exercise.CaloriesPerLb;
      const caloriesBurned = weight * 2.205 * CaloriesPerLb;
      // 운동을 해야하는 시간 = 먹은 칼로리 / 1시간 기준 소모되는 칼로리
      const time = calories / caloriesBurned;
      return { name, time };
    });
    console.log("timeList:", timeList);
    if (exerciseList == []) {
      const errorMessage = "카테고리를 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return timeList;
  }
}

export { exerciseService };

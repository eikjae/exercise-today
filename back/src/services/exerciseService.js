import { Exercise } from "../db";
import { v4 as uuidv4 } from "uuid";

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

  static async calculateCalories({ weight, exercise }) {
    const calorieInfo = await Exercise.findCaloriesByExercise({
      exercise,
    });

    const caloriesPerLb = calorieInfo.calories_per_lb;
    // 1 kg == 2.205 lb
    const caloriesPerHour = weight * 2.205 * caloriesPerLb;
    const refindCaloriesPerHour = caloriesPerHour.toFixed(2);
    if (refindCaloriesPerHour == "NaN") {
      const errorMessage = "몸무게와 운동 이름을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return refindCaloriesPerHour;
  }
}

export { exerciseService };

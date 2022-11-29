import { Exercise } from "../db";
import { categoryList } from "../lists/categoryList";

class exerciseService {
  static async calculateBmi({ height, weight }) {
    const bmi = weight / (height * 0.01) ** 2;
    const refindBmi = bmi.toFixed(2);
    if (isNaN(refindBmi)) {
      const errorMessage = "키와 몸무게를 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return refindBmi;
  }

  static async calculateCalories({ weight, name, time }) {
    const exercise = await Exercise.findByName({
      name,
    });

    const caloriesPerLb = exercise.CaloriesPerLb;
    // 1 kg == 2.205 lb
    const caloriesPerHour = weight * 2.205 * caloriesPerLb;
    const calories = (caloriesPerHour * time).toFixed(2);
    if (isNaN(calories)) {
      const errorMessage = "몸무게와 운동 이름을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return calories;
  }

  static async timeinfo({ weight, category, calories }) {
    if (categoryList().includes(category) === false) {
      const errorMessage = "카테고리를 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    let exerciseList = await Exercise.findByCategory({
      category,
    });

    const length = exerciseList.length;

    // 최대 8개의 exercise를 랜덤하게 원소로 저장
    exerciseList.sort(() => Math.random() - Math.random());
    if (length > 5) {
      exerciseList = exerciseList.slice(0, 5);
    }

    let timeList = exerciseList.map((exercise) => {
      const name = exercise.name;

      // 1시간 기준 소모되는 칼로리 = 몸무게(kg) * 2.205 * (1시간 기준 소모 칼로리 / 1 lb)
      const CaloriesPerLb = exercise.CaloriesPerLb;
      const caloriesBurned = weight * 2.205 * CaloriesPerLb;
      // 운동을 해야하는 시간 = 먹은 칼로리 / 1시간 기준 소모되는 칼로리
      const time = (calories / caloriesBurned).toString();
      return { name, time };
    });

    // 시간 순으로 정렬
    timeList.sort((a, b) => {
      return a.time - b.time;
    });

    // 시간을 "1시간 23분"과 같은 형식으로 저장
    timeList = timeList.map((v) => {
      const hour = parseInt(v.time);
      const minute = parseInt((parseFloat(v.time) % 1) * 60);
      return { name: v.name, time: `${hour}시간 ${minute}분` };
    });

    return timeList;
  }

  static async exerciseList({ category }) {
    if (categoryList().includes(category) === false) {
      const errorMessage = "카테고리를 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    let exerciseList = await Exercise.findByCategory({
      category,
    });
    console.log("exerciseList:", exerciseList);
    let exerciseNameList = exerciseList.map((exercise) => exercise.name);

    return exerciseNameList;
  }
}

export { exerciseService };

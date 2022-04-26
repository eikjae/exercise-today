import { Food } from "../db";

class foodService {
  static async getFoods() {
    const foods = await Food.findAll();
    const foodsCategory = foods.map((x) => x["category"]);
    return foodsCategory;
  }

  static async calculateCalories({ foodsInfo }) {
    const calories = await foodsInfo.reduce(async (acc, cur, idx, arr) => {
      const sum = await acc;
      const food = await Food.findByCategory({
        category: cur["category"],
      });
      if (!food) {
        return;
      }
      return sum + food["calories"] * cur["volume"];
    }, 0);

    if (!calories) {
      const errorMessage = "카테고리를 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return calories;
  }
}

export { foodService };

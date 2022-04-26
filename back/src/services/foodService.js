import { Food } from "../db";

class foodService {
  static async getFoods() {
    const foods = await Food.findAll();
    const foodsCategory = foods.map((x) => x["category"]);
    return foodsCategory;
  }

  static calculateCalories({ foodsInfo }) {
    const calories = foodsInfo.reduce(async (acc, cur) => {
      const sum = await acc;
      const food = await Food.findByCategory({ category: cur["category"] });
      return sum + food["calories"] * cur["volume"];
    }, 0);
    return calories;
  }
}

export { foodService };

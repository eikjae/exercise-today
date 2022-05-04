import { Food } from "../db";
import assert from "assert";

class foodService {
  static async getFoods() {
    const foods = await Food.findAll();
    const foodsCategory = foods.map((x) => x["category"]);
    return foodsCategory;
  }

  static async calculateCalories({ foodsInfo }) {
    if (!foodsInfo || Object.keys(foodsInfo).length === 0) {
      const errorMessage = "음식정보를 입력해 주세요.";
      throw new Error(errorMessage);
    }

    for (const { category } of foodsInfo) {
      const food = await Food.findByCategory({ category });
      if (!food) {
        const errorMessage = "카테고리를 다시 한 번 확인해 주세요.";
        throw new Error(errorMessage);
      }
    }

    const calories = foodsInfo.reduce(async (acc, cur) => {
      const sum = await acc;
      const food = await Food.findByCategory({
        category: cur["category"],
      });
      return sum + food["calories"] * cur["volume"];
    }, 0);

    return calories;
  }
}

export { foodService };

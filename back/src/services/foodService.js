import { Food } from "../db";

class foodService {
  static async getFood({ category }) {
    const food = await Food.findByCategory({ category });
    if (!food) {
      const errorMessage =
        "해당 카테고리 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return food;
  }

  static async getFoods() {
    const foods = await Food.findAll();
    return foods;
  }

  static calculateCalories({ foodsInfo }) {
    const calories = foodsInfo.reduce(async (acc, cur) => {
        const sum = await acc
        const food = await Food.findByCategory({ category: cur["category"] })
        return sum + food["calories"] * cur["volume"]
    }, 0)
    return calories
  }
}

export { foodService };

import { FoodModel } from "../schemas/food";

export class Food {
  static async findByCategory({ category }) {
    const food = await FoodModel.findOne({ category });
    return food;
  }

  static async findAll() {
    const foods = await FoodModel.find({});
    return foods;
  }
}

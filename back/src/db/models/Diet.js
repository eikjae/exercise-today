import { DietModel } from "../schemas/diet";

export class Diet {
  static async create({ newItem }) {
    const createdNewItem = await DietModel.create(newItem);
    return createdNewItem;
  }

  static async findByDate({ userId, whenDate }) {
    const items = await DietModel.find({ userId, whenDate });
    return items;
  }

  static async deleteByDate({ userId, whenDate }) {
    const result = await DietModel.deleteMany({ userId, whenDate });
    return result;
  }

  static async deleteByUserId({ userId }) {
    const result = await DietModel.deleteMany({ userId });
    return result;
  }
}

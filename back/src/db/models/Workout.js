import { WorkoutModel } from "../schemas/workout";

export class Workout {
  static async create({ newItem }) {
    const createdNewItem = await WorkoutModel.create(newItem);
    return createdNewItem;
  }

  static async findByDate({ userId, whenDate }) {
    const items = await WorkoutModel.find({ userId, whenDate });
    return items;
  }

  static async deleteByDate({ userId, whenDate }) {
    const result = await WorkoutModel.deleteMany({ userId, whenDate });
    return result;
  }

  static async deleteByUserId({ userId }) {
    const result = await WorkoutModel.deleteMany({ userId });
    return result;
  }
}

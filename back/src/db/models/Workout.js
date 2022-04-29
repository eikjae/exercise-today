import { WorkoutModel } from "../schemas/workout";

export class Workout {
  static async create({ newItem }) {
    const createdNewItem = await WorkoutModel.create(newItem);
    return createdNewItem;
  }

  static async findByItemId({ itemId }) {
    const item = await WorkoutModel.findOne({ itemId });
    return item;
  }

  static async findByDate({ userId, whenDate }) {
    const items = await WorkoutModel.find({ userId, whenDate });
    return items;
  }

  static async update({ itemId, fieldToUpdate, newValue }) {
    const filter = { itemId };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedItem = await WorkoutModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedItem;
  }

  static async deleteByItemId({ itemId }) {
    const result = await WorkoutModel.deleteOne({ itemId });
    const deletedResult = result.deletedCount == 1; //Boolean
    return deletedResult;
  }

  static async deleteByUserId({ userId }) {
    const result = await WorkoutModel.deleteMany({ userId });
    return result;
  }
}

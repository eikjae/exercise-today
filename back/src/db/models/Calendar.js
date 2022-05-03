import { CalendarModel } from "../schemas/calendar";

export class Calendar {
  static async create({ newItem }) {
    const createdNewItem = await CalendarModel.create(newItem);
    return createdNewItem;
  }

  static async findByDate({ userId, whenDate }) {
    const item = await CalendarModel.findOne({ userId, whenDate });
    return item;
  }

  static async findCaloriesByDate({ userId, whenDate }) {
    const item = await CalendarModel.findOne(
      { userId, whenDate },
      "calories.title calories.start calories.backgroundColor"
    );
    return item;
  }

  static async findCaloriesByMonth({ userId, whenDate }) {
    const items = await CalendarModel.find(
      { userId, whenDate },
      "calories.title calories.start calories.backgroundColor"
    );
    return items;
  }

  static async update({ userId, whenDate, fieldToUpdate, newValue }) {
    const filter = { userId, whenDate };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedItem = await CalendarModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedItem;
  }

  static async deleteByItemId({ itemId }) {
    const result = await CalendarModel.deleteOne({ itemId });
    const deletedResult = result.deletedCount === 1; //Boolean
    return deletedResult;
  }

  static async deleteByUserId({ userId }) {
    const result = await CalendarModel.deleteMany({ userId });
    return result;
  }
}

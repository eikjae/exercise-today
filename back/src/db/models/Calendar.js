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

  static async deleteByDate({ userId, whenDate }) {
    const result = await CalendarModel.deleteMany({ userId, whenDate });
    return result;
  }

  static async deleteByUserId({ userId }) {
    const result = await CalendarModel.deleteMany({ userId });
    return result;
  }
}

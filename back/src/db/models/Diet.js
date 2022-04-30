import { DietModel } from "../schemas/diet";

export class Diet {
  static async create({ newItem }) {
    const createdNewItem = await DietModel.create(newItem);
    return createdNewItem;
  }

  static async findByItemId({ itemId }) {
    const item = await DietModel.findOne({ itemId });
    return item;
  }

  static async findByDate({ userId, whenDate }) {
    const items = await DietModel.find({ userId, whenDate });
    return items;
  }

  static async findByDateAndType({ userId, whenDate, type }) {
    const items = await DietModel.find({ userId, whenDate, type });
    return items;
  }

  static async update({ itemId, fieldToUpdate, newValue }) {
    const filter = { itemId };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedItem = await DietModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedItem;
  }

  static async deleteByItemId({ itemId }) {
    const result = await DietModel.deleteOne({ itemId });
    const deletedResult = result.deletedCount == 1; //Boolean
    return deletedResult;
  }

  static async deleteByUserId({ userId }) {
    const result = await DietModel.deleteMany({ userId });
    return result;
  }
}

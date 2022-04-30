import { DietImageModel } from "../schemas/dietImage";

export class DietImage {
  static async create({ newItem }) {
    const createdNewItem = await DietImageModel.create(newItem);
    return createdNewItem;
  }

  static async findByItemId({ itemId }) {
    const item = await DietImageModel.findOne({ itemId });
    return item;
  }

  static async findByDateAndType({ userId, whenDate, type }) {
    const item = await DietImageModel.findOne({ userId, whenDate, type });
    return item;
  }

  static async update({ itemId, fieldToUpdate, newValue }) {
    const filter = { itemId };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedItem = await DietImageModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedItem;
  }

  static async deleteByItemId({ itemId }) {
    const result = await DietImageModel.deleteOne({ itemId });
    const deletedResult = result.deletedCount == 1; //Boolean
    return deletedResult;
  }

  static async deleteByUserId({ userId }) {
    const result = await DietImageModel.deleteMany({ userId });
    return result;
  }
}

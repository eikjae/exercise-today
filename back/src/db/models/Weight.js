import { WeightModel } from "../schemas/weight";

export class Weight {
  static async create({ newWeight }) {
    const createdWeight = await WeightModel.create(newWeight);
    return createdWeight;
  }

  static async findByDate({ userId, whenDate }) {
    const weight = await WeightModel.findOne({ userId, whenDate });
    return weight;
  }

  static async deleteByDate({ userId, whenDate }) {
    const result = await WeightModel.deleteOne({ userId, whenDate });
    const deletedResult = result.deletedCount === 1;
    return deletedResult;
  }

  static async deleteByUserId({ userId }) {
    const result = await WeightModel.deleteMany({ userId });
    return result;
  }
}

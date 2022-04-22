import { ExerciseModel } from "../schemas/exercise";

class Exercise {
  static async findByName({ name }) {
    const exerciseInfo = await ExerciseModel.findOne({ name });
    return exerciseInfo;
  }

  static async findByCategory({ category }) {
    const exerciseInfo = await ExerciseModel.find({ category });
    return exerciseInfo;
  }
}

export { Exercise };

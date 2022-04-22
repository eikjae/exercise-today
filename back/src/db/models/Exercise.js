import { ExerciseModel } from "../schemas/exercise";

class Exercise {
  static async findByName({ name }) {
    const exercise = await ExerciseModel.findOne({ name });
    return exercise;
  }

  static async findByCategory({ category }) {
    const exerciseInfo = await ExerciseModel.find({ category });
    return exerciseInfo;
  }
}

export { Exercise };

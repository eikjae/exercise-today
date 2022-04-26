import { ExerciseModel } from "../schemas/exercise";

class Exercise {
  static async findByName({ name }) {
    const exercise = await ExerciseModel.findOne({ name });
    return exercise;
  }

  static async findByCategory({ category }) {
    const exercise = await ExerciseModel.find({ category });
    return exercise;
  }
}

export { Exercise };

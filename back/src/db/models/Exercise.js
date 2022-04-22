import { ExerciseModel } from "../schemas/exercise";

class Exercise {
  static async findCaloriesByExercise({ exercise }) {
    const exerciseInfo = await ExerciseModel.findOne({ exercise });
    return exerciseInfo;
  }

  static async findByCategory({ category }) {
    const exerciseInfo = await ExerciseModel.find({ category });
    return exerciseInfo;
  }
}

export { Exercise };

import { ExerciseModel } from "../schemas/exercise";

class Exercise {
  static async findCaloriesByExercise({ exercise }) {
    const exerciseInfo = await ExerciseModel.findOne({ exercise });
    return exerciseInfo;
  }
}

export { Exercise };

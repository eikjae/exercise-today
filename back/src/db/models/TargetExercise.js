import { TargetExerciseModel } from "../schemas/targetExercise";

class TargetExercise {
  static async findByPartAndTool({ bodyPart, equipment, target }) {
    const targetExerciseList = await TargetExerciseModel.find({
      bodyPart,
      equipment,
      target,
    });

    return targetExerciseList;
  }
}

export { TargetExercise };

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

  static async findByBodyPart({ bodyPart }) {
    const exercises = await TargetExerciseModel.find({
      bodyPart,
    });
    return exercises;
  }

  static async findByBodyPartAndTarget({ bodyPart, target }) {
    const exercises = await TargetExerciseModel.find({
      bodyPart,
      target,
    });
    return exercises;
  }
}

export { TargetExercise };

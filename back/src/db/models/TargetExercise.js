import { TargetExerciseModel } from "../schemas/targetExercise";

export class TargetExercise {
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

  static async findTargetExercises({ bodyPart, equipment, target }) {
    const exercises = await TargetExerciseModel.find({
      bodyPart,
      equipment,
      target,
    });
    return exercises;
  }
}

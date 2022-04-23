import { TargetExerciseModel } from "../schemas/targetExercise";

class TargetExercise {
  static async findByPartAndTool({ bodyPart, equipment }) {
    console.log("bodyPart:", bodyPart, ", equipment:", equipment);
    const targetExerciseList = await TargetExerciseModel.find({
      bodyPart,
      equipment,
    });
    console.log("targetExerciseList:", targetExerciseList);
    return targetExerciseList;
  }
}

export { TargetExercise };

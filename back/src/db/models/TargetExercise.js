import { TargetExerciseModel } from "../schemas/targetExercise";

class TargetExercise {
  static async findByPartAndTool({ bodyPart, equipment, target }) {
    console.log("bodyPart:", bodyPart, ", equipment:", equipment);
    const targetExerciseList = await TargetExerciseModel.find({
      bodyPart,
      equipment,
      target
    });
    console.log("targetExerciseList:", targetExerciseList);
    return targetExerciseList;
  }

  static async findByBodyPart({ bodyPart }) {
    const exercises = await TargetExerciseModel.find({ 
        bodyPart 
    });
    return exercises;
  }

  static async findByBodyPartAndTarget({ bodyPart, target }) {
    const exercises = await TargetExerciseModel.find({ 
        bodyPart,
        target 
    });
    return exercises;
  }
}

export { TargetExercise };

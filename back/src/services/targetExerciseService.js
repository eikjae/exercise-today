import { TargetExercise } from "../db";

class targetExerciseService {
  static async fromPartAndTool({ bodyPart, equipment }) {
    const targetExerciseList = await TargetExercise.findByPartAndTool({
      bodyPart,
      equipment,
    });

    if (targetExerciseList == []) {
      const errorMessage = "부위와 장비 이름을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return targetExerciseList;
  }
}

export { targetExerciseService };

import { TargetExercise } from "../db";

class targetExerciseService {
  static async fromPartAndTool({ bodyPart, equipment, target }) {
    let targetExerciseList = await TargetExercise.findByPartAndTool({
      bodyPart,
      equipment,
      target,
    });

    if (targetExerciseList == []) {
      const errorMessage = "부위와 장비 이름을 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    if (targetExerciseList.length > 5) {
      targetExerciseList = targetExerciseList.slice(0, 5);
    }
    return targetExerciseList;
  }
}

export { targetExerciseService };
